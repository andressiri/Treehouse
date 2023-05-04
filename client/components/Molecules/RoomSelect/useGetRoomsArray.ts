import { useContext, useMemo } from "react";
import { RoomsContext } from "../../../contexts";
import { useGetRoomsEffect } from "../../../services";
import { sortByName } from "../../../utils/helpers";
import { SelectOption } from "../../../typings/forms";
import { AnyRoomArray, IRoom } from "../../../typings/rooms";

interface Props {
  showTeacherless?: boolean;
  teacherId?: number;
}

const useGetRoomsArray = ({ showTeacherless, teacherId }: Props) => {
  const { rooms } = useContext(RoomsContext);

  useGetRoomsEffect({ errorToast: true });

  const roomsOptionsArray: SelectOption[] = useMemo(() => {
    const sanitizedArray: SelectOption[] = (rooms as AnyRoomArray)
      .filter((room: IRoom) => {
        if (
          (showTeacherless &&
            room.teacherId &&
            (teacherId ? room.teacherId !== teacherId : true)) ||
          (teacherId && room.teacherId && room.teacherId !== teacherId)
        )
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
  }, [rooms, showTeacherless, teacherId]);

  return roomsOptionsArray;
};

export default useGetRoomsArray;
