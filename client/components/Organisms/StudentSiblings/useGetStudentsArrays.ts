import { useContext } from "react";
import { StudentsContext } from "../../../contexts";
import {
  useGetStudentsWithRelationsEffect,
  useHandleStudentsResponseEffect,
} from "../../../services";
import {
  AnyStudentArray,
  IStudentWithRelations,
} from "../../../typings/students";
import { SelectOption } from "../../../typings/global";
import { sortByName } from "../../../utils/helpers";

const useGetStudentsArrays = (person: IStudentWithRelations) => {
  const { students } = useContext(StudentsContext);

  useHandleStudentsResponseEffect({});
  useGetStudentsWithRelationsEffect();

  const siblingsIds = person.hasSibling?.map((sibling) => {
    return sibling?.id;
  });

  const studentsArray = (students as AnyStudentArray).filter((student) => {
    if (student.id === person.id || siblingsIds?.includes(student.id))
      return null;
    return true;
  });

  const selectSiblingArray: SelectOption[] = studentsArray
    .map((student) => {
      return {
        value: `${student.id}`,
        name: student.name,
      };
    })
    .sort(sortByName)
    .concat([{ value: "", name: "Cancel" }]);

  return { siblingsIds, studentsArray, selectSiblingArray };
};

export default useGetStudentsArrays;
