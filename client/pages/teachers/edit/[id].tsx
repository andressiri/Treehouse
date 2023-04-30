import { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { TeachersContext } from "../../../contexts";
import {
  useGetTeacherByIdEffect,
  useHandleTeachersResponseEffect,
} from "../../../services";
import { Layout, EditOrCreatePersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
  TEACHER_ENTITY,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { AnyTeacher } from "../../../typings/teachers";

interface Props {
  staticTeacher?: AnyTeacher;
}

const EditTeacher: FC<Props> = ({ staticTeacher }) => {
  const { teacher, isError, setIsError, message } = useContext(TeachersContext);
  const { isReady, query } = useRouter();

  useHandleTeachersResponseEffect({});
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
          !isReady ||
          !(teacher as AnyTeacher)?.id ||
          (teacher as AnyTeacher).id !== Number(query.id)
            ? staticTeacher
            : (teacher as AnyTeacher)
        }
        entityName={TEACHER_ENTITY}
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
        destination: "/404",
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
