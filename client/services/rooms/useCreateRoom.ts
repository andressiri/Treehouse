import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
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
      await serviceInstance({
        route: `/${ROOMS_ROUTE}`,
        method: "POST",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setRoom,
        formData,
        sanitizeData: true,
      });
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { createRoom };
};

export default useCreateRoom;
