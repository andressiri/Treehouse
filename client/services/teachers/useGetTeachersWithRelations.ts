import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";

const useGetTeachersWithRelations = () => {
  const { setTeachers, setIsError, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const getTeachersWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const teachersData = await axiosInstance("/teachers/all");
      setTeachers(teachersData);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setMessage(`${err}`);
      setIsLoading(false);
    }
  }, [setTeachers, setIsError, setIsLoading, setMessage]);

  return { getTeachersWithRelations };
};

export default useGetTeachersWithRelations;
