import { FC } from "react";
import emptyImage from "../../../assets/emptyImage.png";
import { Container, StyledImage, Name } from "./styledComponents";

interface Props {
  imageSrc?: string;
  name?: string;
}
const RoomCardTeacher: FC<Props> = ({ imageSrc, name }) => {
  return (
    <Container>
      <StyledImage
        src={imageSrc || emptyImage}
        alt="Teacher image"
        width={150}
        height={150}
      />
      {name ? <Name>{name}</Name> : <></>}
    </Container>
  );
};

export default RoomCardTeacher;
