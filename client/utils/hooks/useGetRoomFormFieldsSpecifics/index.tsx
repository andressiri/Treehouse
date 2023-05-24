import { MenuItem } from "@mui/material";
import useGetAvailableTeachers from "../useGetAvailableTeachers";
import { IRoomFormData, IRoomFormVisited } from "../../../typings/rooms";
import { IFormFieldSpecifics, SelectOption } from "../../../typings/forms";

const useGetRoomFormFieldsSpecifics = (
  formData: IRoomFormData,
  formVisited: IRoomFormVisited,
  roomId?: number
) => {
  const teachersSelectOptions: SelectOption[] = (
    useGetAvailableTeachers(roomId).map((teacher) => {
      return {
        value: `${teacher.id}`,
        name: teacher.name,
      };
    }) as SelectOption[]
  ).concat([{ value: undefined, name: "No teacher" }]);

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
    {
      field: "name",
      required: true,
      helperText:
        formData.name || !formVisited.name ? "" : "A room name is required",
    },
    {
      field: "description",
      error: Boolean(
        formVisited.description &&
          formData.description?.length &&
          formData.description?.length > 4999
      ),
      multiline: true,
      rows: 4,
      helperText:
        formData.description?.length && formData.description?.length > 4999
          ? "Description max length is 5000 characters"
          : "",
    },
    {
      field: "teacherId",
      label: "Teacher",
      disabled: teachersSelectOptions.length < 2,
      select: true,
      error: false,
      helperText: "",
      children: teachersSelectOptions.map((option, id) => {
        return (
          <MenuItem key={`${option.name}${id}`} value={option.value}>
            {option.name}
          </MenuItem>
        );
      }),
    },
  ];

  return formFieldsSpecificsArray;
};

export default useGetRoomFormFieldsSpecifics;
