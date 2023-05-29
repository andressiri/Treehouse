import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { TeachersContext } from "../../../contexts";
import { useGetTeacherByIdWithRelationsEffect } from "../../../services";
import { Layout, CreateOrEditPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  TEACHERS_ROUTE,
  TEACHERS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { ITeacherWithRelations } from "../../../typings/teachers";
import { useGetEditTeacherComponentsProps } from "../../../utils/hooks";

interface Props {
  staticTeacher: ITeacherWithRelations;
}

const EditTeacher: FC<Props> = ({ staticTeacher }) => {
  const { teacherWithRelations } = useContext(TeachersContext);
  const { isReady, query } = useRouter();

  useGetTeacherByIdWithRelationsEffect({ errorToast: true });

  const teacherToUse =
    !isReady ||
    !(teacherWithRelations as ITeacherWithRelations)?.id ||
    (teacherWithRelations as ITeacherWithRelations).id !== Number(query.id)
      ? staticTeacher
      : (teacherWithRelations as ITeacherWithRelations);

  const componentsProps = useGetEditTeacherComponentsProps(teacherToUse);

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
