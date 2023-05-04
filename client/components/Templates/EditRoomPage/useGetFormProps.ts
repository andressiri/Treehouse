import { useRouter } from "next/router";
import { useEditRoom } from "../../../services";
import {
  useGetRoomFormFieldsSpecifics,
  useGetRoomFormRequestHandlers,
  useGetRoomFormState,
} from "../../../utils/hooks";
import { IRoom } from "../../../typings/rooms";
import { IFormProps } from "../../../typings/forms";
import { ROOMS_ROUTE, ROOMS_SINGULAR } from "../../../config/constants";

const useGetFormProps = (room: IRoom): IFormProps => {
  const buttonText = "Edit room";
  const requiredFieldsArray = ["name"];
  const { push, query } = useRouter();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRoomFormState({ room });

  const formFieldsSpecificsArray = useGetRoomFormFieldsSpecifics(
    formData,
    formVisited
  );

  const { errorAction, successAction, errorMessage, setErrorMessage } =
    useGetRoomFormRequestHandlers();

  const { editRoom, isLoading, message } = useEditRoom({
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
        if (!obj[key as keyof typeof obj] && !requiredFieldsArray.includes(key))
          (obj[key as keyof typeof obj] as string | undefined) = undefined;
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

  const disableSubmit =
    isLoading ||
    !formData.name ||
    (formData.description?.length && formData.description?.length > 4999) ||
    !checkChanges();

  const handleCancel = () =>
    push(`/${ROOMS_ROUTE}/${ROOMS_SINGULAR}/${room.id}`);

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
