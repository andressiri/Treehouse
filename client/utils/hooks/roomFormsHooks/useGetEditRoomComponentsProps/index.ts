import { useState } from "react";
import { useRouter } from "next/router";
import { useEditRoom, useRemoveTeacherFromRoom } from "../../../../services";
import { sanitizeFormChanges } from "../../../../utils/helpers";
import {
  useCheckImageWasUploaded,
  useGetRoomFormDisableSubmit,
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormResponseHandlers,
  useGetRoomFormState,
} from "../../../../utils/hooks";
import { IRoom, IRoomFormData } from "../../../../typings/rooms";
import { FormsComponentsProps } from "../../../../typings/forms";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../../../config/constants";

const useGetEditRoomComponentsProps = (room: IRoom): FormsComponentsProps => {
  const [keepLoading, setKeepLoading] = useState(false);
  const title = `Edit ${room.name} room`;
  const buttonText = "Edit room";
  const entity = "room";
  const { push, query } = useRouter();
  const roomIdNumber = Number(query.id);

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({ room });

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormResponseHandlers();

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited,
    roomIdNumber
  );

  const {
    removeTeacherFromRoom,
    isLoading: removeLoading,
    message: removeMessage,
  } = useRemoveTeacherFromRoom({
    errorAction: () => {
      errorAction(removeMessage);
      setKeepLoading(false);
    },
    successAction: () => {
      successAction();
      setKeepLoading(false);
    },
    successMessage: `${room?.name} edited successfully`,
    successToast: true,
  });

  const {
    editRoom,
    isLoading: editLoading,
    message: editMessage,
  } = useEditRoom({
    errorAction: () => {
      if (!formData.teacherId && room.teacherId) {
        removeTeacherFromRoom(roomIdNumber);
      } else {
        errorAction(editMessage);
      }
    },
    successAction: () => {
      if (!formData.teacherId && room.teacherId) {
        removeTeacherFromRoom(roomIdNumber);
      } else {
        successAction();
        setKeepLoading(false);
      }
    },
    successToast: !(!formData.teacherId && room.teacherId),
  });

  const checkChanges = () => Boolean(sanitizeFormChanges(formData, room, true));

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeFormChanges(formData, room);

    if (data || imageWasUploaded) {
      setErrorMessage("");
      setKeepLoading(true);
      editRoom(data as Partial<IRoomFormData>, roomIdNumber);
    } else {
      setErrorMessage("There are no changes to submit");
    }
  };

  const formIsLoading = editLoading || removeLoading || keepLoading;

  const disableSubmit = useGetRoomFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    formIsLoading
  );

  const handleCancel = () =>
    push(`/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${room.id}`);

  return {
    title,
    imageProps: {
      image: room.image,
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

export default useGetEditRoomComponentsProps;
