import { FC } from "react";
import emptyImage from "../../../assets/emptyImage.png";
import { Container, TeacherImage, TeacherName } from "./styledComponents";

interface Props {
  imageSrc?: string;
  name: string;
}
const RoomCardTeacher: FC<Props> = ({ imageSrc, name }) => {
  return (
    <Container>
      <TeacherImage
        src={imageSrc || emptyImage}
        alt="Teacher image"
        width={150}
        height={150}
      />
      <TeacherName>{name}</TeacherName>
    </Container>
  );
};

export default RoomCardTeacher;
