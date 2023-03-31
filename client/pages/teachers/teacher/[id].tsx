import { FC, useContext, useEffect } from "react";
import { TeachersContext } from "../../../contexts";
import Router from "next/router";
import { useGetTeacherByIdEffect } from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";

const TeacherById: FC = () => {
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  useGetTeacherByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <PersonPage data={teacher} modelName="teacher" />
    </Layout>
  );
};

export default TeacherById;
