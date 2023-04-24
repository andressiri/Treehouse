import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { ROOMS_HANDLE_TEACHER, ROOMS_ROUTE } from "../../config/constants";

const useRemoveTeacherFromRoom = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const removeTeacherFromRoom = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(
          `/${ROOMS_ROUTE}/${ROOMS_HANDLE_TEACHER}/${id}`,
          {},
          "DELETE"
        ); // id is room id
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { removeTeacherFromRoom };
};

export default useRemoveTeacherFromRoom;
