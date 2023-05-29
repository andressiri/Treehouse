import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { IRoomFormData } from "../../typings/rooms";
import { EDIT, ROOMS_ROUTE } from "../../config/constants";

type IFormData = Partial<IRoomFormData>;

const useEditRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const editRoom = useCallback(
    (formData: IFormData, id: number) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}/${EDIT}/${id}`,
        data: formData,
        method: "PUT",
        setState: setRoom,
        type: "withImage",
      });
    },
    [executeRequest, setRoom]
  );

  return { editRoom, isError, isSuccess, isLoading, message };
};

export default useEditRoom;
