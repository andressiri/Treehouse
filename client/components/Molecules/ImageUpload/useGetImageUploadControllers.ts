import { useRef, useState } from "react";
import { arrayBufferToBase64 } from "../../../utils/helpers";

interface Props {
  image?: string;
  entity?: "person" | "room";
}

const useGetImageUploadControllers = ({ image, entity = "person" }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(image);
  const inputFile = useRef<HTMLInputElement>(null);
  const isPerson = entity === "person";

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

        sessionStorage.setItem(
          isPerson ? "pictureForRequest" : "imageForRequest",
          result as string
        );
        setImagePreview(result as string);
      }
    };
    if (!e.target.files) return;

    fileReader.readAsDataURL(e.target.files[0]);
  };

  return {
    imagePreview,
    inputFile,
    isPerson,
    handleUploadImage,
    handleFileUpload,
  };
};

export default useGetImageUploadControllers;
