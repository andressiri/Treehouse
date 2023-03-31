import { FC } from "react";
import { Title } from "./styledComponents";

interface Props {
  children: string;
}

const SectionTitle: FC<Props> = ({ children }) => {
  return <Title>{children}</Title>;
};

export default SectionTitle;
