import { FC } from "react";
import { SectionTitle } from "../../Atoms";
import { RoomForm } from "../../Organisms";
import { Container } from "./styledComponents";
import useGetFormProps from "./useGetFormProps";

const CreateRoomPage: FC = () => {
  const formProps = useGetFormProps();

  return (
    <Container>
      <SectionTitle>Create a brand new room</SectionTitle>
      <RoomForm {...formProps} />
    </Container>
  );
};

export default CreateRoomPage;
