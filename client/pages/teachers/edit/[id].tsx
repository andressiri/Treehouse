import { FC, useContext, useEffect } from "react";
import { RoomsContext, TeachersContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useGetTeacherByIdEffect,
} from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";

const EditTeacher: FC = () => {
  const { rooms } = useContext(RoomsContext);
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  useGetRoomsWithRelationsEffect();
  useGetTeacherByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <EditOrCreatePersonPage
        person={teacher}
        rooms={rooms}
        modelName="teacher"
      />
    </Layout>
  );
};

export default EditTeacher;
