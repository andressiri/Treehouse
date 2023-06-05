import { useMemo } from "react";
import { validateEmail } from "../../../../helpers";
import { ILoginFormData } from "../../../../../typings/users";

const useGetLoginFormDisableSubmit = (
  formData: ILoginFormData,
  checkChanges: () => object | boolean,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return (
      isLoading ||
      !formData.email ||
      !validateEmail(formData.email) ||
      !formData.password ||
      (formData.password?.length && formData.password?.length < 6) ||
      !checkChanges()
    );
  }, [formData, checkChanges, isLoading]);

  return disableSubmit;
};

export default useGetLoginFormDisableSubmit;
