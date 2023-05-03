import { useCreateRoom } from "../../../services";
import {
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IRoomFormProps } from "../../../typings/rooms";

const useGetFormProps = (): IRoomFormProps => {
  const buttonText = "Create room";

  const { formData, handleOnChange } = useGetRoomFormState({});

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { createRoom, message } = useCreateRoom({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setErrorMessage("");

    createRoom(formData);
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
