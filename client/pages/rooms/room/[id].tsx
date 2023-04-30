import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { RoomsContext } from "../../../contexts";
import {
  useGetRoomByIdEffect,
  useHandleRoomsResponseEffect,
} from "../../../services";
import { Layout, RoomPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  ROOMS_ROUTE,
  ROOMS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { IRoomWithRelations } from "../../../typings/rooms";

interface Props {
  staticRoom: IRoomWithRelations;
}

const RoomById: FC<Props> = ({ staticRoom }) => {
  const { room } = useContext(RoomsContext);
  const { isReady, query } = useRouter();

  useHandleRoomsResponseEffect({ errorToast: true });
  useGetRoomByIdEffect();

  return (
    <Layout>
      <RoomPage
        room={
          !isReady ||
          !(room as IRoomWithRelations)?.id ||
          (room as IRoomWithRelations).id !== Number(query.id)
            ? staticRoom
            : (room as IRoomWithRelations)
        }
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

export default RoomById;
