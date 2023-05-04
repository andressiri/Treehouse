import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { BasicFormConstructor } from "../../Organisms";
import { Container } from "./styledComponents";
import useGetFormProps from "./useGetFormProps";
import { IRoom } from "../../../typings/rooms";

interface Props {
  room: IRoom;
}

const EditRoomPage: FC<Props> = ({ room }) => {
  const formProps = useGetFormProps(room);

  return (
    <Container>
      <SectionTitle>{`Edit ${room.name} room`}</SectionTitle>
      <BasicFormConstructor {...formProps} />
    </Container>
  );
};

export default EditRoomPage;
