import { useMemo } from "react";
import { validateEmail } from "../../../../helpers";
import { IRegisterFormData } from "../../../../../typings/users";

const useGetRegisterFormDisableSubmit = (
  imageWasUploaded: boolean,
  formData: IRegisterFormData,
  checkChanges: () => object | boolean,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return (
      isLoading ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !validateEmail(formData.email) ||
      !formData.password ||
      (formData.password?.length && formData.password?.length < 6) ||
      (!checkChanges() && !imageWasUploaded)
    );
  }, [imageWasUploaded, formData, checkChanges, isLoading]);

  return disableSubmit;
};

export default useGetRegisterFormDisableSubmit;
