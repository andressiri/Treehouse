import { FC, useContext } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsWithRelations } from "../../../services";
import { Spinner } from "../../../components/Atoms";
import { RoomCard } from "../../../components/Organisms";
import { Container } from "./styledComponents";

const RoomCardsDisplay: FC = () => {
  const { rooms, isLoading } = useContext(RoomsContext);
  useGetRoomsWithRelations();

  if (isLoading) return <Spinner />;

  return (
    <Container>
      {rooms.map((room, id: number) => {
        return (
          <RoomCard
            name={room.name}
            roomId={room.id}
            teacherName={room.Teacher?.name ? room.Teacher.name : "No teacher"}
            description={room.description}
            key={`${room.id}${room.name}${id}`}
          />
        );
      })}
    </Container>
  );
};

export default RoomCardsDisplay;
