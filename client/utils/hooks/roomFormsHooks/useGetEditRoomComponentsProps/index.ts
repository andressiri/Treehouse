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
    errorAction: () => errorAction(removeMessage),
    successAction,
    successMessage: "Room edited successfully",
    successToast: true,
  });

  const {
    editRoom,
    isLoading: editLoading,
    message: editMessage,
  } = useEditRoom({
    errorAction: () => {
      !formData.teacherId && room.teacherId
        ? removeTeacherFromRoom(roomIdNumber)
        : errorAction(editMessage);
    },
    successAction: () => {
      !formData.teacherId && room.teacherId
        ? removeTeacherFromRoom(roomIdNumber)
        : successAction();
    },
    successToast: !(!formData.teacherId && room.teacherId),
  });

  const checkChanges = () => Boolean(sanitizeFormChanges(formData, room, true));

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeFormChanges(formData, room);

    if (data) {
      setErrorMessage("");
      editRoom(data as Partial<IRoomFormData>, roomIdNumber);
    } else {
      setErrorMessage("There are no changes to submit");
    }
  };

  const disableSubmit = useGetRoomFormDisableSubmit(
    imageWasUploaded,
    formData,
    checkChanges,
    editLoading || removeLoading
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
