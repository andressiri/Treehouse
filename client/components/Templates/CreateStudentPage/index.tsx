import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { ImageUpload } from "../../Molecules";
import { BasicFormConstructor } from "../../Organisms";
import {
  Container,
  ImageContainer,
} from "../../../styles/sharedStyledComponents/personForms";
import useGetComponentsProps from "./useGetComponentsProps";

const CreateStudentPage: FC = () => {
  const { imageProps, formProps } = useGetComponentsProps();

  return (
    <Container>
      <SectionTitle>Create a brand new student</SectionTitle>
      <ImageContainer>
        <ImageUpload {...imageProps} />
      </ImageContainer>
      <BasicFormConstructor {...formProps} />
    </Container>
  );
};

export default CreateStudentPage;
