import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { useServiceInstance } from "../../utils/hooks";
import { IHandleResponseOptions } from "../../typings/services";
import { ROOMS_HANDLE_TEACHER, ROOMS_ROUTE } from "../../config/constants";

const useRemoveTeacherFromRoom = (responseOptions: IHandleResponseOptions) => {
  const { setRoom } = useContext(RoomsContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const removeTeacherFromRoom = useCallback(
    (id: number) => {
      executeRequest({
        route: `/${ROOMS_ROUTE}/${ROOMS_HANDLE_TEACHER}/${id}`, // id is room id
        method: "DELETE",
        setState: setRoom,
      });
    },
    [executeRequest, setRoom]
  );

  return { removeTeacherFromRoom, isError, isSuccess, isLoading, message };
};

export default useRemoveTeacherFromRoom;
