import { FC } from "react";
import {
  CardDescription,
  DisplayPersonImage,
  CardTitle,
} from "../../Molecules";
import { Container, InfoContainer } from "./styledComponents";
import { Entities } from "../../../typings/global";

interface Props {
  name: string;
  id: number;
  teacherName?: string;
  image?: string;
  description?: string;
  entityName: Entities;
}

const DisplayCard: FC<Props> = ({
  name,
  id,
  teacherName,
  image,
  description,
  entityName,
}) => {
  return (
    <Container>
      <CardTitle title={name} id={id} entityName={entityName} />
      <InfoContainer>
        <DisplayPersonImage imageSrc={image} name={teacherName} />
        <CardDescription
          description={description}
          id={id}
          entityName={entityName}
        />
      </InfoContainer>
    </Container>
  );
};

export default DisplayCard;
