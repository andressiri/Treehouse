import { FC, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useGetTeachersEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  TEACHERS_ROUTE,
  TEACHER_ENTITY,
} from "../../config/constants";
import { GetStaticProps } from "next";
import { ITeacher } from "../../typings/teachers";

interface Props {
  staticTeachers: ITeacher[];
}

const Teachers: FC<Props> = ({ staticTeachers }) => {
  const { teachers } = useContext(TeachersContext);

  useGetTeachersEffect({ errorToast: true });

  return (
    <Layout>
      <DisplayPage
        data={!teachers[0] ? staticTeachers : (teachers as ITeacher[])}
        entityName={TEACHER_ENTITY}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${TEACHERS_ROUTE}/${WITH_RELATIONS}`
  );
  const staticTeachers = await res.json();

  return {
    props: {
      staticTeachers,
    },
  };
};

export default Teachers;
