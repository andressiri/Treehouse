import { FC, useContext, useEffect } from "react";
import { RoomsContext, TeachersContext } from "../../../contexts";
import Router from "next/router";
import {
  useGetRoomsWithRelationsEffect,
  useGetTeacherByIdEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";

const TeacherById: FC = () => {
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  const { rooms } = useContext(RoomsContext);

  useGetTeacherByIdEffect();
  useGetRoomsWithRelationsEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <PersonPage rooms={rooms} data={teacher} modelName="teacher" />
    </Layout>
  );
};

export default TeacherById;
