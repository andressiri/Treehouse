import { useMemo } from "react";
import { AnyRoomArray } from "../../../typings/rooms";
import { AnyStudentArray } from "../../../typings/students";
import { AnyTeacherArray, ITeacher } from "../../../typings/teachers";
import { CardsDisplayArrayObject } from "../../../typings/cards";

interface Props {
  data: AnyRoomArray | AnyStudentArray | AnyTeacherArray;
}

const useFilterData = ({ data }: Props) => {
  const dataToPass = useMemo(() => {
    const filteredData = data.map((obj) => {
      let auxObj: CardsDisplayArrayObject = {
        name: obj.name,
        id: obj.id,
        description: obj.description,
      };

      if ("picture" in obj) {
        auxObj = {
          ...auxObj,
          picture: obj.picture,
        };
      }

      if ("Teacher" in obj && (obj.Teacher as ITeacher)?.id) {
        auxObj = {
          ...auxObj,
          Teacher: {
            name: (obj.Teacher as ITeacher).name,
            picture: (obj.Teacher as ITeacher).picture,
          },
        };
      }

      return auxObj;
    });

    return filteredData;
  }, [data]);

  return {
    dataToPass,
  };
};

export default useFilterData;
