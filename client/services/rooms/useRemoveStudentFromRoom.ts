import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useRemoveStudentFromRoom = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const removeStudentFromRoom = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(`/students/room/${id}`, {}, "DELETE");
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

  return { removeStudentFromRoom };
};

export default useRemoveStudentFromRoom;
