import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { RoomsContext } from "../../../contexts";
import {
  useGetRoomByIdEffect,
  useHandleRoomsResponseEffect,
} from "../../../services";
import { Layout, EditOrCreateRoomPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  ROOMS_ROUTE,
  ROOMS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  staticRoom?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const EditRoom: FC<Props> = ({ staticRoom }) => {
  const { room } = useContext(RoomsContext);
  const { isReady, query } = useRouter();

  useGetRoomByIdEffect();
  useHandleRoomsResponseEffect({});

  return (
    <Layout>
      <EditOrCreateRoomPage
        room={!isReady || !room || room.id !== query.id ? staticRoom : room}
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
    `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${id}`
  );
  const staticRoom = await res.json();

  if (!staticRoom.id)
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };

  return {
    props: {
      staticRoom,
    },
  };
};

export default EditRoom;
