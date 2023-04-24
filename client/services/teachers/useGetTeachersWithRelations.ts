import { useCallback, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { axiosInstance } from "../../utils/helpers";
import { WITH_RELATIONS, TEACHERS_ROUTE } from "../../config/constants";

const useGetTeachersWithRelations = () => {
  const { setTeachers, setIsError, setIsLoading, setMessage } =
    useContext(TeachersContext);

  const getTeachersWithRelations = useCallback(async () => {
    setIsLoading(true);
    try {
      const teachersData = await axiosInstance(
        `/${TEACHERS_ROUTE}/${WITH_RELATIONS}`
      );
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
