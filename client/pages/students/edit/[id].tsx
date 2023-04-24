import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { RoomsContext, StudentsContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useGetStudentByIdEffect,
} from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
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

const EditStudent: FC<Props> = ({ staticStudent }) => {
  const { rooms } = useContext(RoomsContext);
  const { student, isError, setIsError, message } = useContext(StudentsContext);
  const { isReady, query } = useRouter();

  useGetRoomsWithRelationsEffect();
  useGetStudentByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <EditOrCreatePersonPage
        person={
          !isReady || !student || student.id !== query.id
            ? staticStudent
            : student
        }
        rooms={rooms}
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

export default EditStudent;
