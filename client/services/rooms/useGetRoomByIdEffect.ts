import { useContext, useEffect } from "react";
import { RoomsContext } from "../../contexts";
import { useRouter } from "next/router";
import useGetRoomById from "./useGetRoomById";

const useGetRoomByIdEffect = () => {
  const { setIsError, setMessage } = useContext(RoomsContext);
  const { isReady, query } = useRouter();
  const { getRoomById } = useGetRoomById();

  useEffect(() => {
    if (!isReady) return;

    if (!Number.isInteger(Number(query.id))) {
      setMessage("That is an invalid id");
      setIsError(true);
      return;
    }

    getRoomById(Number(query.id));
  }, [isReady, query, getRoomById, setIsError, setMessage]);
};

export default useGetRoomByIdEffect;
