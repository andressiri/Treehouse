import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { ImageUpload } from "../../Molecules";
import { BasicFormConstructor } from "../../Organisms";
import {
  Container,
  ImageContainer,
} from "../../../styles/sharedStyledComponents/roomForms";
import useGetFormProps from "./useGetFormProps";

const CreateRoomPage: FC = () => {
  const { imageProps, formProps } = useGetFormProps();

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
