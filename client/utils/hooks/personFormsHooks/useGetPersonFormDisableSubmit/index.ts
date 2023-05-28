import { useMemo } from "react";
import { IPersonFormData } from "../../../../typings/persons";

const useGetPersonFormDisableSubmit = (
  imageWasUploaded: boolean,
  formData: IPersonFormData,
  checkChanges: () => object | boolean,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return (
      isLoading ||
      !formData.name ||
      !formData.age ||
      !(Number(formData.age) >= 0) ||
      !formData.gender ||
      (formData.description?.length && formData.description?.length > 1000) ||
      (!checkChanges() && !imageWasUploaded)
    );
  }, [imageWasUploaded, formData, checkChanges, isLoading]);

  return disableSubmit;
};

export default useGetPersonFormDisableSubmit;
