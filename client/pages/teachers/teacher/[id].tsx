import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { TeachersContext } from "../../../contexts";
import {
  useGetTeacherByIdEffect,
  useHandleTeachersResponseEffect,
} from "../../../services";
import { Layout, PersonPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
  TEACHER_ENTITY,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { ITeacherWithRelations } from "../../../typings/teachers";

interface Props {
  staticTeacher: ITeacherWithRelations;
}

const TeacherById: FC<Props> = ({ staticTeacher }) => {
  const { teacher } = useContext(TeachersContext);
  const { isReady, query } = useRouter();

  useHandleTeachersResponseEffect({ errorToast: true });
  useGetTeacherByIdEffect();

  return (
    <Layout>
      <PersonPage
        person={
          !isReady ||
          !(teacher as ITeacherWithRelations)?.id ||
          (teacher as ITeacherWithRelations).id !== Number(query.id)
            ? staticTeacher
            : (teacher as ITeacherWithRelations)
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

export default TeacherById;
