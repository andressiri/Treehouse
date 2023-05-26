import { IRoomFormData } from "../../../../typings/rooms";

const useGetRoomFormDisableSubmit = (
  formData: IRoomFormData,
  checkChanges: () => object | boolean,
  isLoading: boolean
) => {
  const disableSubmit =
    isLoading ||
    !formData.name ||
    !formData.capacity ||
    !(Number(formData.capacity) > 0) ||
    (formData.description?.length && formData.description?.length > 5000) ||
    !checkChanges();

  return disableSubmit;
};

export default useGetRoomFormDisableSubmit;
