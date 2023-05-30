import { useEditRoom, useRemoveTeacherFromRoom } from "../../../../services";
import { sanitizeFormChanges } from "../../../../utils/helpers";
import {
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetRoomFormDisableSubmit,
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormState,
} from "../../../../utils/hooks";
import { IRoom, IRoomFormData } from "../../../../typings/rooms";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ROOM_ENTITY } from "../../../../config/constants";

const useGetEditRoomComponentsProps = (room: IRoom): FormsComponentsProps => {
  const title = `Edit ${room.name} room`;
  const buttonText = "Edit room";
  const noChangesError = "There are no changes to submit";
  const successMessage = `${room?.name} edited successfully`;
  const entity = ROOM_ENTITY;
  const isPerson = false;

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({ room });

  const {
    errorAction,
    successAction,
    errorMessage,
    setErrorMessage,
    keepLoading,
    setKeepLoading,
  } = useGetFormBasicResponseHandlers(entity);

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited,
    room.id
  );

  const {
    removeTeacherFromRoom,
    isLoading: removeLoading,
    message: removeMessage,
  } = useRemoveTeacherFromRoom({
    errorAction: () => errorAction(removeMessage),
    successAction,
    successMessage,
    successToast: true,
  });

  const {
    editRoom,
    isLoading: editLoading,
    message: editMessage,
  } = useEditRoom({
    errorAction: () => {
      !formData.teacherId && room.teacherId
        ? removeTeacherFromRoom(room.id)
        : errorAction(editMessage);
    },
    successAction: () => {
      !formData.teacherId && room.teacherId
        ? removeTeacherFromRoom(room.id)
        : successAction();
    },
    successToast: !(!formData.teacherId && room.teacherId),
  });

  const checkChanges = () => Boolean(sanitizeFormChanges(formData, room, true));

  const formIsLoading = editLoading || removeLoading || keepLoading;

  const disableSubmit = useGetRoomFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeFormChanges(formData, room);

    if (!disableSubmit && (data || imageWasUploaded)) {
      setErrorMessage("");
      setKeepLoading(true);

      editRoom(data as Partial<IRoomFormData>, room.id);
    } else {
      setErrorMessage(noChangesError);
    }
  };

  const handleCancel = () => successAction();

  return {
    title,
    imageProps: {
      image: room.image,
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

export default useGetEditRoomComponentsProps;
