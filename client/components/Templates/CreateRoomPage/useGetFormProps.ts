import { useRouter } from "next/router";
import { useCreateRoom } from "../../../services";
import {
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IFormProps } from "../../../typings/forms";
import { ROOMS_ROUTE } from "../../../config/constants";

const useGetFormProps = (): IFormProps => {
  const buttonText = "Create room";
  const { push } = useRouter();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({});

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited
  );

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { createRoom, isLoading, message } = useCreateRoom({
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

  const disableSubmit =
    isLoading ||
    !formData.name ||
    (formData.description?.length && formData.description?.length > 4999) ||
    !checkChanges();

  const handleCancel = () => push(`/${ROOMS_ROUTE}`);

  return {
    formData,
    formVisited,
    formFieldsSpecificsArray,
    handleVisited,
    handleOnChange,
    checkChanges,
    handleSubmit,
    handleCancel,
    errorMessage,
    disableSubmit,
    buttonText,
  };
};

export default useGetFormProps;
