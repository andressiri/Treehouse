import { useRouter } from "next/router";
import { useCreateRoom } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetRoomFormDisableSubmit,
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormResponseHandlers,
  useGetRoomFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ROOMS_ROUTE } from "../../../../config/constants";

const useGetCreateRoomComponentsProps = (): FormsComponentsProps => {
  const title = "Create a brand new room";
  const buttonText = "Create room";
  const entity = "room";
  const { push } = useRouter();

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({});

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited
  );

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormResponseHandlers();

  const { createRoom, isLoading, message } = useCreateRoom({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const checkChanges = useCheckCreationFormChanges(formData);

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
    title,
    imageProps: {
      entity,
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

export default useGetCreateRoomComponentsProps;
