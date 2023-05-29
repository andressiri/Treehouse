import { FC } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DisplayPersonImage,
  DisplayRoomImage,
} from "../../../components/Molecules";
import {
  ImageContainer,
  StyledFileInput,
  PersonImageContainer,
  StyledDeleteButton,
  StyledUploadButton,
} from "./styledComponents";
import useGetImageUploadControllers from "./useGetImageUploadControllers";
import { ImageUploadProps } from "../../../typings/forms";

const ImageUpload: FC<ImageUploadProps> = ({
  image,
  isPerson,
  notifyImageWasUploaded,
  notifyImageWasCanceled,
}) => {
  const {
    imageUploaded,
    imagePreview,
    inputFile,
    handleUploadImage,
    handleFileUpload,
    handleCancelUpload,
    handleDeleteImage,
  } = useGetImageUploadControllers({
    image,
    isPerson,
    notifyImageWasUploaded,
    notifyImageWasCanceled,
  });

  return (
    <ImageContainer>
      <StyledFileInput
        type="file"
        accept="image/*"
        ref={inputFile}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFileUpload(e)
        }
      />
      {isPerson ? (
        <PersonImageContainer>
          <DisplayPersonImage imageSrc={imagePreview} />
        </PersonImageContainer>
      ) : (
        <DisplayRoomImage imageSrc={imagePreview} />
      )}
      {image && !imageUploaded && (
        <StyledDeleteButton onClick={handleDeleteImage} isPerson={isPerson}>
          <DeleteForeverIcon />
        </StyledDeleteButton>
      )}
      <StyledUploadButton
        onClick={!imageUploaded ? handleUploadImage : handleCancelUpload}
        imageUploaded={imageUploaded}
        isPerson={isPerson}
      >
        {!imageUploaded ? <CloudUploadIcon /> : <ClearIcon />}
      </StyledUploadButton>
    </ImageContainer>
  );
};

export default ImageUpload;
