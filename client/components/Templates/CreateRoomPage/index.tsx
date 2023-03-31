import { FC } from "react";
import { SectionTitle } from "../../../components/Atoms";
import { CreateRoomForm } from "../../../components/Organisms";
import { Container } from "./styledComponents";

const CreateRoomPage: FC = () => {
  return (
    <Container>
      <SectionTitle>Create a brand new room</SectionTitle>
      <CreateRoomForm />
    </Container>
  );
};

export default CreateRoomPage;
