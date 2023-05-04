import { useCallback, useState } from "react";
import { IRoom, IRoomFormData, IRoomFormVisited } from "../../../typings/rooms";

interface Props {
  room?: IRoom;
}

const useGetRoomFormProps = ({ room }: Props) => {
  const [formData, setFormData] = useState<IRoomFormData>({
    name: room?.name || "",
    description: room?.description || "",
  });
  const [formVisited, setFormVisited] = useState<IRoomFormVisited>({
    name: false,
    description: false,
  });

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleVisited = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (formVisited[e.target.name as keyof typeof formVisited]) return;

      setFormVisited({
        ...formVisited,
        [e.target.name]: true,
      });
    },
    [formVisited]
  );

  return {
    formData,
    setFormData,
    handleOnChange,
    formVisited,
    setFormVisited,
    handleVisited,
  };
};

export default useGetRoomFormProps;