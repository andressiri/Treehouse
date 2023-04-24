import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { DELETION, ROOMS_ROUTE } from "../../config/constants";

const useDeleteRoom = () => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const deleteRoom = useCallback(
    async (id: number) => {
      setIsLoading(true);
      try {
        await axiosInstance(`/${ROOMS_ROUTE}/${DELETION}/${id}`, {}, "DELETE");
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

  return { deleteRoom };
};

export default useDeleteRoom;
