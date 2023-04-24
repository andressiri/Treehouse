import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { ROOMS_ROUTE } from "../../config/constants";

interface IFormData {
  name: string;
  description?: string;
}

const useCreateRoom = () => {
  const { setRoom, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const createRoom = useCallback(
    async (formData: IFormData) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${ROOMS_ROUTE}`,
          formData,
          "POST"
        );
        setRoom(response.roomData);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { createRoom };
};

export default useCreateRoom;
