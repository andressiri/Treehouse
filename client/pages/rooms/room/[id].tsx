import { Layout, RoomPage } from "../../../components/Templates";
import { FC, useContext, useEffect } from "react";
import { RoomsContext } from "../../../contexts";
import Router from "next/router";
import { useGetRoomByIdEffect } from "../../../services";

const RoomById: FC = () => {
  const { room, isError, setIsError, message } = useContext(RoomsContext);
  useGetRoomByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      Router.push("/");
    }
  }, [isError, setIsError, message]);

  return (
    <Layout>
      <RoomPage room={room} />
    </Layout>
  );
};

export default RoomById;
