import { FC, useContext, useEffect } from "react";
import { RoomsContext, StudentsContext } from "../../../contexts";
import Router from "next/router";
import {
  useGetRoomsWithRelationsEffect,
  useGetStudentByIdEffect,
  useGetStudentsWithRelationsEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";

const StudentById: FC = () => {
  const {
    students,
    student,
    isError,
    setIsError,
    isSuccess,
    setIsSuccess,
    message,
  } = useContext(StudentsContext);
  const { rooms } = useContext(RoomsContext);
  useGetStudentsWithRelationsEffect();
  useGetStudentByIdEffect();
  useGetRoomsWithRelationsEffect();

  useEffect(() => {
    if (isSuccess) {
      // toast message
      setIsSuccess(false);
    }

    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, isSuccess, setIsSuccess, message]);

  return (
    <Layout>
      <PersonPage
        students={students}
        rooms={rooms}
        data={student}
        modelName="student"
      />
    </Layout>
  );
};

export default StudentById;
