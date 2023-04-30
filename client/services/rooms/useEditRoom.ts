import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { EDIT, ROOMS_ROUTE } from "../../config/constants";

interface IFormData {
  name?: string;
  description?: string;
  teacherId?: string;
}

const useEditRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { excecuteRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const editRoom = useCallback(
    (formData: IFormData, id: number) => {
      excecuteRequest({
        route: `/${ROOMS_ROUTE}/${EDIT}/${id}`,
        method: "PUT",
        setState: setRoom,
        formData,
        sanitizeData: true,
      });
    },
    [excecuteRequest, setRoom]
  );

  return { editRoom, isError, isSuccess, isLoading, message };
};

export default useEditRoom;
