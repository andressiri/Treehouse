import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { ImageUpload } from "../../Molecules";
import { BasicFormConstructor } from "../../Organisms";
import { Container, ImageContainer } from "./styledComponents";
import { FormsComponentsProps } from "../../../typings/forms";

const CreateOrEditPage: FC<FormsComponentsProps> = ({
  title,
  imageProps,
  formProps,
}) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <ImageContainer isPerson={imageProps.isPerson}>
        <ImageUpload {...imageProps} />
      </ImageContainer>
      <BasicFormConstructor {...formProps} />
    </Container>
  );
};

export default CreateOrEditPage;
