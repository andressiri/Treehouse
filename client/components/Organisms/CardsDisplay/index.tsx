import { FC } from "react";
import { FallbackText } from "../../Atoms";
import { DisplayCard } from "..";
import { Container } from "./styledComponents";

interface Props {
  displayArray: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  modelName: "room" | "student" | "teacher";
}

const CardsDisplay: FC<Props> = ({ displayArray, modelName }) => {
  return (
    <Container>
      {displayArray.length ? (
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        displayArray.map((obj: any, id: number) => {
          return (
            <DisplayCard
              name={obj.name}
              roomId={obj.id}
              teacherName={
                obj.Teacher?.name && modelName === "room"
                  ? obj.Teacher.name
                  : modelName === "room"
                  ? "No teacher"
                  : null
              }
              image={
                modelName === "room" && obj.Teacher?.picture
                  ? obj.Teacher.picture
                  : obj.picture
              }
              description={obj.description}
              key={`${obj.id}${obj.name}${id}`}
            />
          );
        })
      ) : (
        <FallbackText>{`There are no ${modelName}s to show`}</FallbackText>
      )}
    </Container>
  );
};

export default CardsDisplay;
