import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { StudentsContext } from "../../../contexts";
import {
  useGetStudentByIdEffect,
  useGetStudentsWithRelationsEffect,
  useHandleStudentsResponseEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  staticStudent?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const StudentById: FC<Props> = ({ staticStudent }) => {
  const { students, student } = useContext(StudentsContext);
  const { isReady, query } = useRouter();

  useHandleStudentsResponseEffect({ errorToast: true });
  useGetStudentByIdEffect();
  useGetStudentsWithRelationsEffect();

  return (
    <Layout>
      <PersonPage
        students={students}
        data={
          !isReady || !student || student.id !== query.id
            ? staticStudent
            : student
        }
        modelName="student"
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${STUDENTS_ROUTE}/${STUDENTS_SINGULAR}/${id}`
  );
  const staticStudent = await res.json();

  if (!staticStudent.id)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  return {
    props: {
      staticStudent,
    },
  };
};

export default StudentById;
