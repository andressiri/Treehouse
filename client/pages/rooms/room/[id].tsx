import { FC, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { RoomsContext } from "../../../contexts";
import { useGetRoomByIdEffect } from "../../../services";
import { Layout, RoomPage } from "../../../components/Templates";
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

const RoomById: FC<Props> = ({ staticRoom }) => {
  const { room, isError, setIsError, message } = useContext(RoomsContext);
  const { isReady, query } = useRouter();

  useGetRoomByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <RoomPage
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
        destination: "/",
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
