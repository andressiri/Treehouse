import { FC, useContext } from "react";
import { TeachersContext } from "../../contexts";
import { useGetTeachersWithRelationsEffect } from "../../services";
import { Layout, DisplayPage } from "../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  WITH_RELATIONS,
  TEACHERS_ROUTE,
} from "../../config/constants";
import { GetStaticProps } from "next";

interface Props {
  staticTeachers?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Teachers: FC<Props> = ({ staticTeachers }) => {
  const { teachers } = useContext(TeachersContext);

  useGetTeachersWithRelationsEffect();

  return (
    <Layout>
      <DisplayPage
        data={!teachers[0] ? staticTeachers : teachers}
        modelName="teacher"
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${TEACHERS_ROUTE}/${WITH_RELATIONS}`
  );
  const staticTeachers = await res.json();

  return {
    props: {
      staticTeachers,
    },
  };
};

export default Teachers;
