import { useRouter } from "next/router";
import { useEditRoom } from "../../../services";
import {
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IRoom, IRoomFormProps } from "../../../typings/rooms";

const useGetFormProps = (room?: IRoom): IRoomFormProps => {
  const buttonText = "Edit room";
  const { query } = useRouter();

  const { formData, handleOnChange } = useGetRoomFormState({ room });

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { editRoom, message } = useEditRoom({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setErrorMessage("");

    editRoom(formData, Number(query.id));
  };

  return {
    formData,
    handleOnChange,
    handleSubmit,
    errorMessage,
    buttonText,
  };
};

export default useGetFormProps;
