import { useContext, useMemo } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsEffect } from "../../../services";
import { sortByName } from "../../../utils/helpers";
import { SelectOption } from "../../../typings/global";
import { AnyRoomArray, IRoom } from "../../../typings/rooms";

const useGetRoomsArray = (teacherId?: number) => {
  const { rooms } = useContext(RoomsContext);

  useGetRoomsEffect({ errorToast: true });

  const roomsOptionsArray: SelectOption[] = useMemo(() => {
    const sanitizedArray: SelectOption[] = (rooms as AnyRoomArray)
      .filter((room: IRoom) => {
        if (teacherId && room.teacherId && room.teacherId !== teacherId)
          return false;
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
  }, [rooms, teacherId]);

  return roomsOptionsArray;
};

export default useGetRoomsArray;
