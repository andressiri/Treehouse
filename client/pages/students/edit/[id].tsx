import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { StudentsContext } from "../../../contexts";
import { useGetStudentByIdEffect } from "../../../services";
import { Layout, CreateOrEditPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  STUDENTS_ROUTE,
  STUDENTS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { IStudent } from "../../../typings/students";
import { useGetEditStudentComponentsProps } from "../../../utils/hooks";

interface Props {
  staticStudent: IStudent;
}

const EditStudent: FC<Props> = ({ staticStudent }) => {
  const { student } = useContext(StudentsContext);
  const { isReady, query } = useRouter();

  useGetStudentByIdEffect({ errorToast: true });

  const studentToUse =
    !isReady ||
    !(student as IStudent)?.id ||
    (student as IStudent).id !== Number(query.id)
      ? staticStudent
      : (student as IStudent);

  const componentsProps = useGetEditStudentComponentsProps(studentToUse);

  return (
    <Layout>
      <CreateOrEditPage {...componentsProps} />
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
