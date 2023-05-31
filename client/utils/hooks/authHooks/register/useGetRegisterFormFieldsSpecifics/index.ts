import { validateEmail } from "../../../../helpers";
import {
  IRegisterFormData,
  IRegisterFormVisited,
} from "../../../../../typings/users";
import { IFormFieldSpecifics } from "../../../../../typings/forms";

const useGetRegisterFormFieldsSpecifics = (
  formData: IRegisterFormData,
  formVisited: IRegisterFormVisited
) => {
  const emailError =
    formVisited.email && (!formData.email || !validateEmail(formData.email));

  const passwordError =
    formVisited.password &&
    (!formData.password || formData.password?.length < 6);

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
    {
      field: "firstName",
      label: "First name",
      required: true,
      helperText:
        formData.firstName || !formVisited.firstName
          ? ""
          : "A first name is required",
    },
    {
      field: "lastName",
      label: "Last name",
      required: true,
      helperText:
        formData.lastName || !formVisited.lastName
          ? ""
          : "A last name is required",
    },
    {
      field: "email",
      required: true,
      type: "email",
      error: emailError,
      helperText: !emailError
        ? ""
        : !formData.email
        ? "An email is required"
        : "Please write a valid email",
    },
    {
      field: "password",
      required: true,
      type: "password",
      error: passwordError,
      helperText: !passwordError
        ? ""
        : !formData.password
        ? "A password is required"
        : "Password should have at least 6 characters",
    },
  ];

  return formFieldsSpecificsArray;
};

export default useGetRegisterFormFieldsSpecifics;
