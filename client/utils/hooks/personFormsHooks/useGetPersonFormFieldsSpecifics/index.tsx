import { MenuItem } from "@mui/material";
import { useGetRoomsArray } from "../../";
import {
  IPersonFormData,
  IPersonFormVisited,
} from "../../../../typings/persons";
import { IFormFieldSpecifics } from "../../../../typings/forms";
import { getSelectGenderArray } from "../../../helpers";

const useGetPersonFormFieldsSpecifics = (
  formData: IPersonFormData,
  formVisited: IPersonFormVisited,
  isTeacher?: boolean,
  teacherId?: number // if person is a teacher, teacherId should be passed
) => {
  const ageIsOk =
    (formData.age && Number(formData.age) >= 0) || !formVisited.age;

  const genderArray = getSelectGenderArray();

  const roomsSelectOptions = useGetRoomsArray({
    showTeacherless: isTeacher,
    teacherId,
  });

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
    {
      field: "name",
      required: true,
      helperText:
        formData.name || !formVisited.name ? "" : "A student name is required",
    },
    {
      field: "age",
      type: "number",
      required: true,
      error: !ageIsOk,
      helperText: ageIsOk
        ? ""
        : !formData.age
        ? "An age is required"
        : "Age should be at least 0",
      InputProps: { inputProps: { min: "0" } },
    },
    {
      field: "gender",
      select: true,
      helperText:
        formData.gender || !formVisited.gender ? "" : "A gender is required",
      children: genderArray.map((option, id) => {
        return (
          <MenuItem key={`${option.name}${id}`} value={option.value}>
            {option.name}
          </MenuItem>
        );
      }),
    },
    {
      field: "description",
      error: Boolean(
        formVisited.description &&
          formData.description?.length &&
          formData.description?.length > 1000
      ),
      multiline: true,
      rows: 4,
      helperText: !formData.description?.length
        ? ""
        : formData.description?.length && formData.description?.length < 1000
        ? `Used ${formData.description.length} of 1000 characters`
        : "Description max length is 1000 characters",
      InputProps: { inputProps: { maxLength: 1000 } },
    },
    {
      field: "roomId",
      label: "Room",
      disabled: roomsSelectOptions.length < 2,
      select: true,
      error: false,
      helperText: "",
      children: roomsSelectOptions.map((option, id) => {
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

export default useGetPersonFormFieldsSpecifics;
