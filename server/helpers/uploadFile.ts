import fs from "fs";
import AWS from "aws-sdk";
import { UploadedFile } from "express-fileupload";
import { PutObjectRequest } from "aws-sdk/clients/s3";

export const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadFile = async (file: UploadedFile) => {
  const content: Buffer = fs.readFileSync(file.tempFilePath);

  const uploadParams: PutObjectRequest = {
    Bucket: process.env.AWS_BUCKET_NAME as string,
    Key: file.name,
    Body: content,
  };

  try {
    const data = await s3.upload(uploadParams).promise();
    return data;
  } catch (err) {
    if (err) throw new Error(err as string);
  }
};

export default uploadFile;
