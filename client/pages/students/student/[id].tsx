import { FC, useContext, useEffect } from "react";
import { StudentsContext } from "../../../contexts";
import Router from "next/router";
import { useGetStudentByIdEffect } from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";

const StudentById: FC = () => {
  const { student, isError, setIsError, message } = useContext(StudentsContext);
  useGetStudentByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <PersonPage data={student} modelName="student" />
    </Layout>
  );
};

export default StudentById;
