import { FC } from "react";
import { ContainerList, StyledItem, NavItemButton } from "./styledComponents";
import useGetLinksArray from "./useGetLinksArray";
import Link from "next/link";

interface Props {
  isDrawer?: boolean;
  isDrawerOpen?: boolean;
}

interface ILink {
  text: string;
  href: string;
  icon: JSX.Element;
  time: number;
}

const NavLinks: FC<Props> = ({ isDrawer, isDrawerOpen }) => {
  const linksArray = useGetLinksArray();

  return (
    <ContainerList>
      {linksArray.map((link: ILink, id: number) => {
        return (
          <Link href={link.href} key={`${link.text}${id}`}>
            <StyledItem
              isDrawer={isDrawer}
              isDrawerOpen={isDrawerOpen}
              appearingTime={link.time}
            >
              <NavItemButton disableRipple startIcon={link.icon}>
                {link.text}
              </NavItemButton>
            </StyledItem>
          </Link>
        );
      })}
    </ContainerList>
  );
};

export default NavLinks;
