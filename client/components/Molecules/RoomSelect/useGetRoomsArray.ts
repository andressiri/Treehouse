import { useContext, useMemo } from "react";
import { RoomsContext } from "../../../contexts";
import {
  useGetRoomsWithRelationsEffect,
  useHandleRoomsResponseEffect,
} from "../../../services";
import { sortByName } from "../../../utils/helpers";
import { SelectOption } from "../../../typings/global";
import { AnyRoomArray, IRoom } from "../../../typings/rooms";

const useGetRoomsArray = (showJustTeacherless?: boolean) => {
  const { rooms } = useContext(RoomsContext);

  useHandleRoomsResponseEffect({});
  useGetRoomsWithRelationsEffect();

  const roomsOptionsArray: SelectOption[] = useMemo(() => {
    const sanitizedArray: SelectOption[] = (rooms as AnyRoomArray)
      .filter((room: IRoom) => {
        if (showJustTeacherless && room.teacherId) return false;
        return true;
      })
      .map((room: IRoom) => {
        return {
          value: `${room.id}`,
          name: room.name,
        };
      })
      .sort(sortByName);

    const arrayWithNoRoomOption = sanitizedArray.concat([
      { value: "", name: "No room" },
    ]);

    return arrayWithNoRoomOption;
  }, [rooms, showJustTeacherless]);

  return roomsOptionsArray;
};

export default useGetRoomsArray;
