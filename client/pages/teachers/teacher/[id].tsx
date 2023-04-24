import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { RoomsContext, TeachersContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useGetTeacherByIdEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  staticTeacher?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const TeacherById: FC<Props> = ({ staticTeacher }) => {
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  const { rooms, isSuccess, setIsSuccess } = useContext(RoomsContext);
  const { isReady, push, query } = useRouter();

  useGetTeacherByIdEffect();
  useGetRoomsWithRelationsEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      push("/");
    }
  }, [isError, setIsError, isSuccess, setIsSuccess, message, push]);

  return (
    <Layout>
      <PersonPage
        rooms={rooms}
        data={
          !isReady || !teacher || teacher.id !== query.id
            ? staticTeacher
            : teacher
        }
        modelName="teacher"
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
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${TEACHERS_ROUTE}/${TEACHERS_SINGULAR}/${id}`
  );
  const staticTeacher = await res.json();

  if (!staticTeacher.id)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      staticTeacher,
    },
  };
};

export default TeacherById;
