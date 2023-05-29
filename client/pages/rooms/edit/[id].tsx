import { FC, useContext } from "react";
import { useRouter } from "next/router";
import { RoomsContext } from "../../../contexts";
import { useGetRoomByIdEffect } from "../../../services";
import { useGetEditRoomComponentsProps } from "../../../utils/hooks";
import { Layout, CreateOrEditPage } from "../../../components/Templates";
import {
  API_ORIGIN,
  API_ROUTE,
  API_VERSION,
  ROOMS_ROUTE,
  ROOMS_SINGULAR,
} from "../../../config/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { IRoom } from "../../../typings/rooms";

interface Props {
  staticRoom: IRoom;
}

const EditRoom: FC<Props> = ({ staticRoom }) => {
  const { room } = useContext(RoomsContext);
  const { isReady, query } = useRouter();

  useGetRoomByIdEffect({ errorToast: true });

  const roomToUse =
    !isReady || !(room as IRoom)?.id || (room as IRoom).id !== Number(query.id)
      ? staticRoom
      : (room as IRoom);

  const componentsProps = useGetEditRoomComponentsProps(roomToUse);

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
