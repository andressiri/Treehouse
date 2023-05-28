import { useGetAvailableTeachers } from "../";
import { SelectOption } from "../../../typings/forms";

const useGetSelectAvailableTeachersArray = (
  roomId?: number
): SelectOption[] => {
  const teachersSelectOptions: SelectOption[] = (
    useGetAvailableTeachers(roomId).map((teacher) => {
      return {
        value: `${teacher.id}`,
        name: teacher.name,
      };
    }) as SelectOption[]
  ).concat([{ value: undefined, name: "No teacher" }]);

  return teachersSelectOptions;
};

export default useGetSelectAvailableTeachersArray;
