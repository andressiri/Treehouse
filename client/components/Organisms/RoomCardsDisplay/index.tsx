import { FC } from "react";
import { FallbackText } from "../../../components/Atoms";
import { RoomCard } from "../../../components/Organisms";
import { Container } from "./styledComponents";

interface Props {
  roomsArray: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const RoomCardsDisplay: FC<Props> = ({ roomsArray }) => {
  return (
    <Container>
      {roomsArray.length ? (
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        roomsArray.map((room: any, id: number) => {
          return (
            <RoomCard
              name={room.name}
              roomId={room.id}
              teacherName={
                room.Teacher?.name ? room.Teacher.name : "No teacher"
              }
              teacherPicture={
                room.Teacher?.picture ? room.Teacher.picture : null
              }
              description={room.description}
              key={`${room.id}${room.name}${id}`}
            />
          );
        })
      ) : (
        <FallbackText>There are no rooms to show</FallbackText>
      )}
    </Container>
  );
};

export default RoomCardsDisplay;
