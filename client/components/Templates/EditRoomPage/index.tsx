import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { BasicFormConstructor } from "../../Organisms";
import {
  Container,
  ImageContainer,
} from "../../../styles/sharedStyledComponents/roomForms";
import useGetComponentsProps from "./useGetComponentsProps";
import { IRoom } from "../../../typings/rooms";
import { ImageUpload } from "../../Molecules";

interface Props {
  room: IRoom;
}

const EditRoomPage: FC<Props> = ({ room }) => {
  const { imageProps, formProps } = useGetComponentsProps(room);

  return (
    <Container>
      <SectionTitle>{`Edit ${room.name} room`}</SectionTitle>
      <ImageContainer>
        <ImageUpload {...imageProps} />
      </ImageContainer>
      <BasicFormConstructor {...formProps} />
    </Container>
  );
};

export default EditRoomPage;
