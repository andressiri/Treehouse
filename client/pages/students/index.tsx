import { FC, useContext } from "react";
import { StudentsContext } from "../../contexts";
import {
  useGetStudentsWithRelationsEffect,
  useHandleStudentsResponseEffect,
} from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  STUDENTS_ROUTE,
  STUDENT_ENTITY,
} from "../../config/constants";
import { GetStaticProps } from "next";
import { AnyStudentArray } from "../../typings/students";

interface Props {
  staticStudents: AnyStudentArray;
}

const Students: FC<Props> = ({ staticStudents }) => {
  const { students } = useContext(StudentsContext);

  useHandleStudentsResponseEffect({ errorToast: true });
  useGetStudentsWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage
        data={!students[0] ? staticStudents : (students as AnyStudentArray)}
        entityName={STUDENT_ENTITY}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${STUDENTS_ROUTE}/${WITH_RELATIONS}`
  );
  const staticStudents = await res.json();

  return {
    props: {
      staticStudents,
    },
  };
};

export default Students;
