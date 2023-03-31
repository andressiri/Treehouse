import { FC, useContext, useEffect } from "react";
import Router from "next/router";
import { RoomsContext, StudentsContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useGetStudentByIdEffect,
} from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const EditStudent: FC = () => {
  const { rooms } = useContext(RoomsContext);
  const { student, isError, setIsError, message } = useContext(StudentsContext);
  useGetRoomsWithRelationsEffect();
  useGetStudentByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <EditOrCreatePersonPage
        person={student}
        rooms={rooms}
        modelName="student"
      />
    </Layout>
  );
};

export default EditStudent;
