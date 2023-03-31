import { FC } from "react";
import { Text } from "./styledComponents";

interface Props {
  children: string;
}

const FallbackText: FC<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default FallbackText;
