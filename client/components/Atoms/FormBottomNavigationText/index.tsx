import { FC } from "react";
import Link from "next/link";
import { NavigationText } from "./styledComponents";

interface Props {
  href: string;
  text: string;
}

const FormBottomNavigationText: FC<Props> = ({ href, text }) => {
  return (
    <Link href={href}>
      <NavigationText>{text}</NavigationText>
    </Link>
  );
};

export default FormBottomNavigationText;
