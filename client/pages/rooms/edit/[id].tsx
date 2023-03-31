import { FC, useContext, useEffect } from "react";
import Router from "next/router";
import { RoomsContext } from "../../../contexts";
import { useGetRoomByIdEffect } from "../../../services";
import { Layout, EditOrCreateRoomPage } from "../../../components/Templates";

const EditRoom: FC = () => {
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
      <EditOrCreateRoomPage room={room} />
    </Layout>
  );
};

export default EditRoom;
