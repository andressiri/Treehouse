import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

interface ILink {
  text: string;
  href: string;
  icon: JSX.Element;
  time: number;
}

const useGetLinksArray = () => {
  const linksArray: ILink[] = [
    {
      text: "Rooms",
      href: "/rooms",
      icon: <CastForEducationIcon />,
      time: 600,
    },
    {
      text: "Teachers",
      href: "/teachers",
      icon: <HistoryEduIcon />,
      time: 650,
    },
    {
      text: "Students",
      href: "/students",
      icon: <LocalLibraryIcon />,
      time: 700,
    },
  ];

  return linksArray;
};

export default useGetLinksArray;
