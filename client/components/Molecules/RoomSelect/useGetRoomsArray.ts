import { useContext, useMemo } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsWithRelationsEffect } from "../../../services";

const useGetRoomsArray = (showJustTeacherless?: boolean) => {
  const { rooms } = useContext(RoomsContext);

  useGetRoomsWithRelationsEffect();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roomsArray: any[] = useMemo(() => {
    const arrayWithNoRoomOption = rooms.concat([
      {
        value: "",
        name: "No room",
      },
    ]);

    if (!showJustTeacherless) return arrayWithNoRoomOption;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return arrayWithNoRoomOption.filter((room: any) => {
      if (!room.teacherId) return true;

      return false;
    });
  }, [rooms, showJustTeacherless]);

  return roomsArray;
};

export default useGetRoomsArray;
