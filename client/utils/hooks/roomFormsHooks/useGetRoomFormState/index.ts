import { useState } from "react";
import { useHandleFormChange, useHandleFormVisited } from "../..";
import {
  IRoom,
  IRoomFormData,
  IRoomFormVisited,
} from "../../../../typings/rooms";

interface Props {
  room?: IRoom;
}

const useGetRoomFormState = ({ room }: Props) => {
  const [formData, setFormData] = useState<IRoomFormData>({
    name: room?.name || "",
    capacity: room?.capacity ? `${room.capacity}` : "",
    description: room?.description || "",
    teacherId: room?.teacherId ? `${room.teacherId}` : "",
  });
  const [formVisited, setFormVisited] = useState<IRoomFormVisited>({
    name: false,
    capacity: false,
    description: false,
    teacherId: false,
  });

  const handleOnChange = useHandleFormChange({ formData, setFormData });

  const handleVisited = useHandleFormVisited({ formVisited, setFormVisited });

  return {
    formData,
    setFormData,
    handleOnChange,
    formVisited,
    setFormVisited,
    handleVisited,
  };
};

export default useGetRoomFormState;
