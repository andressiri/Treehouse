import { useContext } from "react";
import { StudentsContext } from "../../../contexts";
import { useGetStudentsWithRelationsEffect } from "../../../services";
import { IStudentWithRelations } from "../../../typings/students";
import { SelectOption } from "../../../typings/global";
import { sortByName } from "../../../utils/helpers";

const useGetStudentsArrays = (person: IStudentWithRelations) => {
  const { studentsWithRelations } = useContext(StudentsContext);

  useGetStudentsWithRelationsEffect({ errorToast: true });

  const siblingsIds = person.hasSibling?.map((sibling) => {
    return sibling?.id;
  });

  const studentsArray = (
    studentsWithRelations as IStudentWithRelations[]
  ).filter((student) => {
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
