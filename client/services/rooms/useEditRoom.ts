import { useCallback, useContext } from "react";
import { RoomsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
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
    async (formData: IFormData, id: number) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/${ROOMS_ROUTE}/${EDIT}/${id}`,
          formData,
          "PUT"
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

  return { editRoom };
};

export default useEditRoom;
