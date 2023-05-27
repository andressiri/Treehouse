import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { ImageUpload } from "../../Molecules";
import { BasicFormConstructor } from "../../Organisms";
import {
  Container,
  ImageContainer,
} from "../../../styles/sharedStyledComponents/roomForms";
import useGetComponentsProps from "./useGetComponentsProps";

const CreateRoomPage: FC = () => {
  const { imageProps, formProps } = useGetComponentsProps();

  return (
    <Container>
      <SectionTitle>Create a brand new room</SectionTitle>
      <ImageContainer>
        <ImageUpload {...imageProps} />
      </ImageContainer>
      <BasicFormConstructor {...formProps} />
    </Container>
  );
};

export default CreateRoomPage;
