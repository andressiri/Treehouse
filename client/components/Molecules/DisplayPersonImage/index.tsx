import { FC } from "react";
import emptyImage from "../../../assets/emptyPersonImage.png";
import { Container, StyledImage, Name } from "./styledComponents";

interface Props {
  imageSrc?: string;
  name?: string;
}
const DisplayPersonImage: FC<Props> = ({ imageSrc, name }) => {
  return (
    <Container>
      <StyledImage
        src={imageSrc || emptyImage}
        alt="Person image"
        width={180}
        height={180}
      />
      {name ? <Name>{name}</Name> : <></>}
    </Container>
  );
};

export default DisplayPersonImage;
