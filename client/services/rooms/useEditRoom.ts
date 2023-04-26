import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { serviceInstance } from "../../utils/helpers";
import { EDIT, ROOMS_ROUTE } from "../../config/constants";

interface IFormData {
  name?: string;
  description?: string;
  teacherId?: string;
}

const useEditRoom = () => {
  const { setRoom, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(RoomsContext);

  const editRoom = useCallback(
    (formData: IFormData, id: number) => {
      serviceInstance({
        route: `/${ROOMS_ROUTE}/${EDIT}/${id}`,
        method: "PUT",
        context: { setIsError, setIsSuccess, setIsLoading, setMessage },
        setState: setRoom,
        formData,
        sanitizeData: true,
      });
    },
    [setRoom, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { editRoom };
};

export default useEditRoom;
