import { useRouter } from "next/router";
import { useCreateRoom } from "../../../services";
import {
  useGetRoomFormDisableSubmit,
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IFormProps, ImageUploadProps } from "../../../typings/forms";
import { ROOMS_ROUTE } from "../../../config/constants";

interface ReturnObject {
  imageProps: ImageUploadProps;
  formProps: IFormProps;
}

const useGetFormProps = (): ReturnObject => {
  const buttonText = "Create room";
  const { push } = useRouter();

  const {
    imageWasUploaded,
    notifyImageWasUploaded,
    notifyImageWasCanceled,
    formData,
    handleOnChange,
    formVisited,
    handleVisited,
  } = useGetRoomFormState({});

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

  const disableSubmit = useGetRoomFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    isLoading
  );

  const handleCancel = () => push(`/${ROOMS_ROUTE}`);

  return {
    imageProps: {
      entity: "room",
      notifyImageWasUploaded,
      notifyImageWasCanceled,
    },
    formProps: {
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
    },
  };
};

export default useGetFormProps;
