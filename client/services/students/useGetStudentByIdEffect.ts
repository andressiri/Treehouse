import { useContext, useEffect } from "react";
import { StudentsContext } from "../../contexts";
import { useRouter } from "next/router";
import useGetStudentById from "./useGetStudentById";

const useGetStudentByIdEffect = () => {
  const { setIsError, setMessage } = useContext(StudentsContext);
  const { isReady, query } = useRouter();
  const { getStudentById } = useGetStudentById();

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      setIsError(true);
      setMessage("That is an invalid id");
      return;
    }

    getStudentById(Number(query.id));
  }, [isReady, query, getStudentById, setIsError, setMessage]);
};

export default useGetStudentByIdEffect;
