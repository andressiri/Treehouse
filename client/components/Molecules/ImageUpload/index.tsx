import { FC } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  DisplayPersonImage,
  DisplayRoomImage,
} from "../../../components/Molecules";
import {
  ImageContainer,
  StyledFileInput,
  StyledIconButton,
} from "./styledComponents";
import useGetImageUploadControllers from "./useGetImageUploadControllers";

interface Props {
  image?: string;
  entity?: "person" | "room";
}

const ImageUpload: FC<Props> = ({ image, entity = "person" }) => {
  const {
    imagePreview,
    inputFile,
    isPerson,
    handleUploadImage,
    handleFileUpload,
  } = useGetImageUploadControllers({ image, entity });

  return (
    <ImageContainer onClick={handleUploadImage}>
      <StyledFileInput
        type="file"
        accept="image/*"
        ref={inputFile}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFileUpload(e)
        }
      />
      {isPerson ? (
        <DisplayPersonImage imageSrc={imagePreview} />
      ) : (
        <DisplayRoomImage imageSrc={imagePreview} />
      )}
      <StyledIconButton>
        <CloudUploadIcon />
      </StyledIconButton>
    </ImageContainer>
  );
};

export default ImageUpload;
