import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

interface IFormData {
  name: string;
  description?: string;
}

const useEditTeacher = () => {
  const { setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const editTeacher = useCallback(
    async (formData: IFormData, id: number) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/teachers/edit/${id}`,
          formData,
          "PUT"
        );
        setTeacher(response.teacherData);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setTeacher, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { editTeacher };
};

export default useEditTeacher;
