import { useRouter } from "next/router";
import { useCreateRoom } from "../../../services";
import {
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IRoomFormProps } from "../../../typings/rooms";
import { ROOMS_ROUTE } from "../../../config/constants";

const useGetFormProps = (): IRoomFormProps => {
  const buttonText = "Create room";
  const { push } = useRouter();

  const { formData, handleOnChange } = useGetRoomFormState({});

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { createRoom, message } = useCreateRoom({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = () => {
    let bool = false;
    for (const key in formData) {
      if (formData[key as keyof typeof formData]) {
        bool = true;
        break;
      }
    }
    return bool;
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (checkChanges()) {
      setErrorMessage("");
      createRoom(formData);
    } else {
      setErrorMessage("Please add the information required");
    }
  };

  const handleCancel = () => push(`/${ROOMS_ROUTE}`);

  return {
    formData,
    handleOnChange,
    checkChanges,
    handleSubmit,
    handleCancel,
    errorMessage,
    buttonText,
  };
};

export default useGetFormProps;
