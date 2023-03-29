import { FC } from "react";
import { RoomCard } from "../../../components/Organisms";
import { Container } from "./styledComponents";

const RoomCardsDisplay: FC = () => {
  const cardsArray = [1, 2, 3, 4];
  return (
    <Container>
      {cardsArray.map((card, id: number) => {
        return <RoomCard key={`${card}${id}`} />;
      })}
    </Container>
  );
};

export default RoomCardsDisplay;
