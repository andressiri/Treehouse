import { useRouter } from "next/router";
import { useEditRoom } from "../../../services";
import {
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IRoom, IRoomFormProps } from "../../../typings/rooms";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../../config/constants";

const useGetFormProps = (room: IRoom): IRoomFormProps => {
  const buttonText = "Edit room";
  const { push, query } = useRouter();

  const { formData, handleOnChange } = useGetRoomFormState({ room });

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { editRoom, message } = useEditRoom({
    errorAction: () => errorAction(message),
    successAction,
    successToast: true,
  });

  const sanitizeData = (shouldBreak?: boolean) => {
    const obj = { ...formData };
    let emptyObj = true;

    for (const key in obj) {
      if (obj[key as keyof typeof obj] === room[key as keyof typeof room]) {
        delete obj[key as keyof typeof obj];
      } else {
        emptyObj = false;
        if (shouldBreak) break;
      }
    }

    return !emptyObj ? obj : false;
  };

  const checkChanges = () => Boolean(sanitizeData(true));

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    const data = sanitizeData();

    if (data) {
      setErrorMessage("");
      editRoom(data, Number(query.id));
    } else {
      setErrorMessage("There are no changes to submit");
    }
  };

  const handleCancel = () =>
    push(`/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${room.id}`);

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
