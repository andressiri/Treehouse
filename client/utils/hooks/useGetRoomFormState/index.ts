import { useState } from "react";
import { IRoom, IRoomFormData } from "../../../typings/rooms";

interface Props {
  room?: IRoom;
}

const useGetRoomFormProps = ({ room }: Props) => {
  const [formData, setFormData] = useState<IRoomFormData>({
    name: room?.name || "",
    description: room?.description || "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    setFormData,
    handleOnChange,
  };
};

export default useGetRoomFormProps;
