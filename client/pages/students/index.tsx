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
} from "../../config/constants";
import { GetStaticProps } from "next";

interface Props {
  staticStudents?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Students: FC<Props> = ({ staticStudents }) => {
  const { students } = useContext(StudentsContext);

  useHandleStudentsResponseEffect({ errorToast: true });
  useGetStudentsWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage
        data={!students[0] ? staticStudents : students}
        modelName="student"
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
