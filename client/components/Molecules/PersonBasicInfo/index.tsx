import { FC } from "react";
import { Container, Age, Gender } from "./styledComponents";

interface Props {
  age: number;
  gender: string;
}

const PersonBasicInfo: FC<Props> = ({ age, gender }) => {
  return (
    <Container>
      <Age>
        <span>Age:</span>
        {` ${age}`}
      </Age>
      <Gender>
        <span>Gender:</span>
        {` ${gender}`}
      </Gender>
    </Container>
  );
};

export default PersonBasicInfo;
