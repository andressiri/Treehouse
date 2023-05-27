import { useCallback, useState } from "react";
import {
  IRoom,
  IRoomFormData,
  IRoomFormVisited,
} from "../../../../typings/rooms";

interface Props {
  room?: IRoom;
}

const useGetRoomFormState = ({ room }: Props) => {
  const [imageWasUploaded, setImageWasUploaded] = useState(false);
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

  const notifyImageWasUploaded = () => setImageWasUploaded(true);

  const notifyImageWasCanceled = () => setImageWasUploaded(false);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]:
          typeof e.target.value === "string" ? e.target.value : "",
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
    imageWasUploaded,
    notifyImageWasUploaded,
    notifyImageWasCanceled,
    formData,
    setFormData,
    handleOnChange,
    formVisited,
    setFormVisited,
    handleVisited,
  };
};

export default useGetRoomFormState;
