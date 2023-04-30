import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { StudentsContext } from "../../../contexts";
import {
  useGetStudentByIdEffect,
  useHandleStudentsResponseEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
  STUDENT_ENTITY,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { IStudentWithRelations } from "../../../typings/students";

interface Props {
  staticStudent: IStudentWithRelations;
}

const StudentById: FC<Props> = ({ staticStudent }) => {
  const { student } = useContext(StudentsContext);
  const { isReady, query } = useRouter();

  useHandleStudentsResponseEffect({ errorToast: true });
  useGetStudentByIdEffect();

  return (
    <Layout>
      <PersonPage
        person={
          !isReady ||
          !(student as IStudentWithRelations)?.id ||
          (student as IStudentWithRelations).id !== Number(query.id)
            ? staticStudent
            : (student as IStudentWithRelations)
        }
        entityName={STUDENT_ENTITY}
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
