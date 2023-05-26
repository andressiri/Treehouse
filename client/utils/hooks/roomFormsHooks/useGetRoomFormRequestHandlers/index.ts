import { useContext, useState } from "react";
import { RoomsContext } from "../../../../contexts";
import { useRouter } from "next/router";
import { IRoom } from "../../../../typings/rooms";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../../../config/constants";

const useGetRoomFormRequestHandlers = () => {
  const { room } = useContext(RoomsContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter();

  const errorAction = (message: string) => setErrorMessage(message);

  const successAction = () =>
    push(`/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${(room as IRoom)?.id}`);

  return {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
  };
};

export default useGetRoomFormRequestHandlers;
