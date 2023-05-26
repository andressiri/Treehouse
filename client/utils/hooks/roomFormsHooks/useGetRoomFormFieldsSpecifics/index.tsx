import { MenuItem } from "@mui/material";
import useGetAvailableTeachers from "../../useGetAvailableTeachers";
import { IRoomFormData, IRoomFormVisited } from "../../../../typings/rooms";
import { IFormFieldSpecifics, SelectOption } from "../../../../typings/forms";

const useGetRoomFormFieldsSpecifics = (
  formData: IRoomFormData,
  formVisited: IRoomFormVisited,
  roomId?: number
) => {
  const capacityError =
    (formData.capacity && Number(formData.capacity) > 0) ||
    !formVisited.capacity;
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
      field: "capacity",
      type: "number",
      required: true,
      error: !capacityError,
      helperText: capacityError
        ? ""
        : !formData.capacity
        ? "A room capacity is required"
        : "Room capacity should be greater than 0",
      InputProps: { inputProps: { min: "1" } },
    },
    {
      field: "description",
      error: Boolean(
        formVisited.description &&
          formData.description?.length &&
          formData.description?.length > 5000
      ),
      multiline: true,
      rows: 4,
      helperText: !formData.description?.length
        ? ""
        : formData.description?.length && formData.description?.length < 5000
        ? `Used ${formData.description.length} of 5000 characters`
        : "Description max length is 5000 characters",
      InputProps: { inputProps: { maxLength: 5000 } },
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
