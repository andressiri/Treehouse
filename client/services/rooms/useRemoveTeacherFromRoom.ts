import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { ROOMS_HANDLE_TEACHER, ROOMS_ROUTE } from "../../config/constants";

const useRemoveTeacherFromRoom = () => {
  const { setRoom, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const removeTeacherFromRoom = useCallback(
    (id: number) => {
      serviceInstance({
        route: `/${ROOMS_ROUTE}/${ROOMS_HANDLE_TEACHER}/${id}`, // id is room id
        method: "DELETE",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setRoom,
      });
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { removeTeacherFromRoom };
};

export default useRemoveTeacherFromRoom;
