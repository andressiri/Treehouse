import { useCallback, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

interface IFormData {
  siblingId: string;
  addToOtherSiblings?: boolean;
}

const useRemoveSibling = () => {
  const { setStudent, setIsError, setIsSuccess, setIsLoading, setMessage } =
    useContext(StudentsContext);

  const removeSibling = useCallback(
    async (formData: IFormData, id: number) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance(
          `/students/siblings/${id}`,
          formData,
          "DELETE"
        );
        setStudent(response.studentData);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setMessage(`${err}`);
        setIsLoading(false);
      }
    },
    [setStudent, setIsError, setIsSuccess, setIsLoading, setMessage]
  );

  return { removeSibling };
};

export default useRemoveSibling;
