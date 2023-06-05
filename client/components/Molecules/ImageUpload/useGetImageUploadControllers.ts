import { useEffect, useRef, useState } from "react";
import {
  arrayBufferToBase64,
  clearSessionStorageImages,
} from "../../../utils/helpers";
import emptyPersonImage from "../../../assets/emptyPersonImage.png";
import emptyRoomImage from "../../../assets/emptyRoomImage.png";
import { ImageUploadProps } from "../../../typings/forms";

const useGetImageUploadControllers = ({
  image,
  isPerson,
  notifyImageWasUploaded,
  notifyImageWasCanceled,
}: ImageUploadProps) => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | undefined>(image);
  const inputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    clearSessionStorageImages();

    return () => {
      clearSessionStorageImages();
    };
  }, []);

  const updateImage = (img: string) => {
    sessionStorage.setItem(
      isPerson ? "pictureForRequest" : "imageForRequest",
      img
    );
    setImagePreview(img);
    setImageUploaded(true);

    if (notifyImageWasUploaded) notifyImageWasUploaded();
  };

  const handleUploadImage = () =>
    (inputFile as React.RefObject<HTMLInputElement>).current?.click();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        if (fileReader.result === null) return;

        let result: string | ArrayBuffer = fileReader.result;

        if (typeof fileReader.result !== "string") {
          result = arrayBufferToBase64(result as ArrayBuffer);
        }

        updateImage(result as string);
      }
    };
    if (!e.target.files) return;

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleCancelUpload = () => {
    setImagePreview(image);
    setImageUploaded(false);
    (inputFile.current as HTMLInputElement).value = "";
    clearSessionStorageImages();

    if (notifyImageWasCanceled) notifyImageWasCanceled();
  };

  const handleDeleteImage = () => {
    const imageToSet = isPerson ? emptyPersonImage.src : emptyRoomImage.src;

    updateImage(imageToSet);
  };

  return {
    imageUploaded,
    imagePreview,
    inputFile,
    handleUploadImage,
    handleFileUpload,
    handleCancelUpload,
    handleDeleteImage,
  };
};

export default useGetImageUploadControllers;
