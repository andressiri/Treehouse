import { v4 } from "uuid";
import { makeRequest } from "./";
import { RequestHelpersProps } from "../../../typings/services";
import {
  API_CONTENT_TYPE,
  API_CONTENT_TYPE_WITH_FILE,
} from "../../../config/constants";
import clearSessionStorageImages from "../clearSessionStorageImages";

const requestWithImage = async ({
  route,
  baseUrl,
  data = {},
  method = "GET",
  contentType = API_CONTENT_TYPE,
  headers = {},
}: RequestHelpersProps) => {
  const storageImage = sessionStorage.getItem("imageForRequest");
  const storagePicture = sessionStorage.getItem("pictureForRequest");

  let dataToPass = data;
  const headersToPass = {
    ...headers,
    "Content-Type": contentType,
  };

  if (storageImage || storagePicture) {
    headersToPass["Content-Type"] = API_CONTENT_TYPE_WITH_FILE;
    dataToPass = new FormData();

    for (const key in data) {
      (dataToPass as FormData).append(key, data[key as keyof typeof data]);
    }

    const file = await (
      await fetch(storageImage || (storagePicture as string))
    ).blob();
    (dataToPass as FormData).append(
      storageImage ? "image" : "picture",
      file,
      `${v4()}.jpeg`
    );
  }

  try {
    const response = await makeRequest({
      route,
      baseUrl,
      data: dataToPass,
      method,
      contentType,
      headers: headersToPass,
    });

    clearSessionStorageImages();

    return response;
  } catch (err) {
    if (err instanceof Error) throw err;
    throw new Error(`${err}`);
  }
};

export default requestWithImage;
