import { FC } from "react";
import {
  RoomCardDescription,
  RoomCardTeacher,
  RoomCardTitle,
} from "../../../components/Molecules";
import { Container, InfoContainer } from "./styledComponents";

const RoomCard: FC = () => {
  return (
    <Container>
      <RoomCardTitle title={"Room title"} />
      <InfoContainer>
        <RoomCardTeacher name={"Teacher Name"} />
        <RoomCardDescription
          description={`Are you looking for an engaging and nurturing kindergarden program for your child? Look no further than the Rugrats kindergarden classroom!\nOur classroom is a bright and colorful space filled with toys, games, and learning materials designed to foster your child&apos;s curiosity, creativity, and social-emotional development. Our experienced and caring teacher, Miss Carol, creates a warm and welcoming environment where your child can learn and grow alongside their peers.\nIn our classroom, your child will have the opportunity to participate in a variety of activities including circle time, small group activities, sensory play, and more. We focus on developing key skills such as language and literacy, math and science, and social skills through play-based learning activities.\nWe also encourage parent involvement and strive to maintain open communication with families throughout the school year. Our goal is to provide a safe, nurturing, and enriching learning environment where your child can thrive.\nEnroll your child in the Rugrats kindergarden program today and give them the gift of a positive and meaningful educational experience!`}
        />
      </InfoContainer>
    </Container>
  );
};

export default RoomCard;
