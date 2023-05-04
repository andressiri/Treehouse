import { IRoomFormData, IRoomFormVisited } from "../../../typings/rooms";
import { IFormFieldSpecifics } from "../../../typings/forms";

const useGetRoomFormFieldsSpecifics = (
  formData: IRoomFormData,
  formVisited: IRoomFormVisited
) => {
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
  ];

  return formFieldsSpecificsArray;
};

export default useGetRoomFormFieldsSpecifics;
