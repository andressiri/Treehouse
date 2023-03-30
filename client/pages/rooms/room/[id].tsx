import { Layout, RoomPage } from "../../../components/Templates";
import { FC, useContext, useEffect } from "react";
import { RoomsContext } from "../../../contexts";
import { useRouter } from "next/router";
import { useGetRoomByIdEffect } from "../../../services";

const RoomById: FC = () => {
  const { room, isError, setIsError, message } = useContext(RoomsContext);
  const { push } = useRouter();
  useGetRoomByIdEffect();

  useEffect(() => {
    if (isError) {
      setIsError(false);
      push("/");
    }
  }, [isError, setIsError, push, message]);

  return (
    <Layout>
      <RoomPage room={room} />
    </Layout>
  );
};

export default RoomById;
