import { FC, useContext, useEffect } from "react";
import { RoomsContext, StudentsContext } from "../../../contexts";
import Router from "next/router";
import {
  useGetRoomsWithRelationsEffect,
  useGetStudentByIdEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";

const StudentById: FC = () => {
  const { student, isError, setIsError, message } = useContext(StudentsContext);
  const { rooms } = useContext(RoomsContext);
  useGetStudentByIdEffect();
  useGetRoomsWithRelationsEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <PersonPage rooms={rooms} data={student} modelName="student" />
    </Layout>
  );
};

export default StudentById;
