import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { TeachersContext } from "../../../contexts";
import { useGetTeacherByIdEffect } from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
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

const EditTeacher: FC<Props> = ({ staticTeacher }) => {
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  const { isReady, query } = useRouter();

  useGetTeacherByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <EditOrCreatePersonPage
        person={
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

export default EditTeacher;
