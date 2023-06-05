import { validateEmail } from "../../../../helpers";
import {
  ILoginFormData,
  ILoginFormVisited,
} from "../../../../../typings/users";
import { IFormFieldSpecifics } from "../../../../../typings/forms";

const useGetLoginFormFieldsSpecifics = (
  formData: ILoginFormData,
  formVisited: ILoginFormVisited
) => {
  const emailError =
    formVisited.email && (!formData.email || !validateEmail(formData.email));

  const passwordError =
    formVisited.password &&
    (!formData.password || formData.password?.length < 6);

  const formFieldsSpecificsArray: IFormFieldSpecifics[] = [
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

export default useGetLoginFormFieldsSpecifics;
