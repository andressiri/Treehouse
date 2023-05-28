import { useRouter } from "next/router";
import { useCreateRoom } from "../../../../services";
import {
  useCheckCreationFormChanges,
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetRoomFormDisableSubmit,
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormState,
} from "../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ROOMS_ROUTE, ROOM_ENTITY } from "../../../../config/constants";

const useGetCreateRoomComponentsProps = (): FormsComponentsProps => {
  const title = "Create a brand new room";
  const buttonText = "Create room";
  const informationMissingError = "Please add the information required";
  const cancelRoute = `/${ROOMS_ROUTE}`;
  const entity = ROOM_ENTITY;
  const isPerson = false;
  const { push } = useRouter();

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({});

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited
  );

  const {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  } = useGetFormBasicResponseHandlers(entity);

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
      setKeepLoading(true);
      createRoom(formData);
    } else {
      setErrorMessage(informationMissingError);
    }
  };

  const formIsLoading = isLoading || keepLoading;

  const disableSubmit = useGetRoomFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleCancel = () => push(cancelRoute);

  return {
    title,
    imageProps: {
      isPerson,
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
      formIsLoading,
      buttonText,
    },
  };
};

export default useGetCreateRoomComponentsProps;
