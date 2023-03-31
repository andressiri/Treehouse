import { useContext, useEffect } from "react";
import { TeachersContext } from "../../contexts";
import { useRouter } from "next/router";
import useGetTeacherById from "./useGetTeacherById";

const useGetTeacherByIdEffect = () => {
  const { setIsError, setMessage } = useContext(TeachersContext);
  const { isReady, query } = useRouter();
  const { getTeacherById } = useGetTeacherById();

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      setIsError(true);
      setMessage("That is an invalid id");
      return;
    }

    getTeacherById(Number(query.id));
  }, [isReady, query, getTeacherById, setIsError, setMessage]);
};

export default useGetTeacherByIdEffect;
