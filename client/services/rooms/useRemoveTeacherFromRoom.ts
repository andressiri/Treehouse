import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useRemoveTeacherFromRoom = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const removeTeacherFromRoom = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(`/rooms/teacher/${id}`, {}, "DELETE"); // id is room id
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
