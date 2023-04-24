import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { RoomsContext, StudentsContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useGetStudentByIdEffect,
  useGetStudentsWithRelationsEffect,
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
  const {
    students,
    student,
    isError,
    setIsError,
    isSuccess,
    setIsSuccess,
    message,
  } = useContext(StudentsContext);
  const { rooms } = useContext(RoomsContext);
  const { isReady, push, query } = useRouter();

  useGetStudentsWithRelationsEffect();
  useGetStudentByIdEffect();
  useGetRoomsWithRelationsEffect();

  useEffect(() => {
    if (isSuccess) {
      // toast message
      setIsSuccess(false);
    }

    if (isError) {
      setIsError(false);
      push("/");
    }
  }, [isError, setIsError, isSuccess, setIsSuccess, message, push]);

  return (
    <Layout>
      <PersonPage
        students={students}
        rooms={rooms}
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
        destination: "/",
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
