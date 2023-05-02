import { FC } from "react";
import { FallbackText } from "../../Atoms";
import { DisplayCard } from "..";
import { Container } from "./styledComponents";
import { Entities } from "../../../typings/global";
import { CardsDisplayArrayObject } from "../../../typings/cards";
import { ROOM_ENTITY } from "../../../config/constants";

interface Props {
  displayArray: CardsDisplayArrayObject[];
  entityName: Entities;
}

const CardsDisplay: FC<Props> = ({ displayArray, entityName }) => {
  const isRoom = entityName === ROOM_ENTITY;

  return (
    <Container>
      {displayArray.length ? (
        displayArray.map((obj, id) => {
          return (
            <DisplayCard
              name={obj.name}
              id={obj.id}
              teacherName={
                obj.Teacher?.name && isRoom
                  ? obj.Teacher.name
                  : isRoom
                  ? "No teacher"
                  : undefined
              }
              image={
                isRoom && obj.Teacher?.picture
                  ? obj.Teacher.picture
                  : obj.picture
              }
              description={obj.description}
              entityName={entityName}
              key={`${obj.id}${obj.name}${id}`}
            />
          );
        })
      ) : (
        <FallbackText>{`There are no ${entityName}s to show`}</FallbackText>
      )}
    </Container>
  );
};

export default CardsDisplay;
