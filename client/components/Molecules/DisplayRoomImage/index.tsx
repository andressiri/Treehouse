import { FC } from "react";
import emptyImage from "../../../assets/emptyRoomImage.png";
import { Container, StyledImage, Name } from "./styledComponents";

interface Props {
  imageSrc?: string;
  name?: string;
}
const DisplayRoomImage: FC<Props> = ({ imageSrc, name }) => {
  return (
    <Container>
      <StyledImage
        src={imageSrc || emptyImage}
        alt="Room image"
        width={550}
        height={250}
      />
      {name ? <Name>{name}</Name> : <></>}
    </Container>
  );
};

export default DisplayRoomImage;
