import { FC, useContext } from "react";
import { StudentsContext } from "../../contexts";
import { useGetStudentsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  STUDENTS_ROUTE,
  STUDENT_ENTITY,
} from "../../config/constants";
import { GetStaticProps } from "next";
import { IStudent } from "../../typings/students";

interface Props {
  staticStudents: IStudent[];
}

const Students: FC<Props> = ({ staticStudents }) => {
  const { students } = useContext(StudentsContext);

  useGetStudentsEffect({ errorToast: true });

  return (
    <Layout>
      <DisplayPage
        data={!students[0] ? staticStudents : (students as IStudent[])}
        entityName={STUDENT_ENTITY}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${STUDENTS_ROUTE}`
  );
  const staticStudents = await res.json();

  return {
    props: {
      staticStudents,
    },
  };
};

export default Students;
