import { FC } from "react";
import { CardDescription, DisplayImage, CardTitle } from "../../Molecules";
import { Container, InfoContainer } from "./styledComponents";

interface Props {
  name: string;
  id: number;
  teacherName?: string;
  image: string;
  description: string;
  modelName: "room" | "student" | "teacher";
}

const DisplayCard: FC<Props> = ({
  name,
  id,
  teacherName,
  image,
  description,
  modelName,
}) => {
  return (
    <Container>
      <CardTitle title={name} id={id} modelName={modelName} />
      <InfoContainer>
        <DisplayImage imageSrc={image} name={teacherName} />
        <CardDescription
          description={description}
          id={id}
          modelName={modelName}
        />
      </InfoContainer>
    </Container>
  );
};

export default DisplayCard;
