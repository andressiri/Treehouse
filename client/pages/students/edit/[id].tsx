import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { StudentsContext } from "../../../contexts";
import {
  useGetStudentByIdEffect,
  useHandleStudentsResponseEffect,
} from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
  STUDENT_ENTITY,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { AnyStudent } from "../../../typings/students";

interface Props {
  staticStudent?: AnyStudent;
}

const EditStudent: FC<Props> = ({ staticStudent }) => {
  const { student } = useContext(StudentsContext);
  const { isReady, query } = useRouter();

  useHandleStudentsResponseEffect({});
  useGetStudentByIdEffect();

  return (
    <Layout>
      <EditOrCreatePersonPage
        person={
          !isReady ||
          !(student as AnyStudent)?.id ||
          (student as AnyStudent).id !== Number(query.id)
            ? staticStudent
            : (student as AnyStudent)
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

export default EditStudent;
