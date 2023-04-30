import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import {
  ROOMS_ROUTE,
  STUDENTS_ROUTE,
  TEACHERS_ROUTE,
} from "../../../config/constants";

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
      href: `/${ROOMS_ROUTE}`,
      icon: <CastForEducationIcon />,
      time: 600,
    },
    {
      text: "Teachers",
      href: `/${TEACHERS_ROUTE}`,
      icon: <HistoryEduIcon />,
      time: 650,
    },
    {
      text: "Students",
      href: `/${STUDENTS_ROUTE}`,
      icon: <LocalLibraryIcon />,
      time: 700,
    },
  ];

  return linksArray;
};

export default useGetLinksArray;
