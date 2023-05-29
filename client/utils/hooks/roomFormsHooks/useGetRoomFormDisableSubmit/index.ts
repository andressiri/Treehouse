import { useMemo } from "react";
import { IRoomFormData } from "../../../../typings/rooms";

const useGetRoomFormDisableSubmit = (
  imageWasUploaded: boolean,
  formData: IRoomFormData,
  checkChanges: () => object | boolean,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return (
      isLoading ||
      !formData.name ||
      !formData.capacity ||
      !(Number(formData.capacity) > 0) ||
      (formData.description?.length && formData.description?.length > 5000) ||
      (!checkChanges() && !imageWasUploaded)
    );
  }, [imageWasUploaded, formData, checkChanges, isLoading]);

  return disableSubmit;
};

export default useGetRoomFormDisableSubmit;
