import { useCallback, useContext } from "react";
import { UsersContext } from "../../../contexts";
import { useServiceInstance } from "../../../utils/hooks";
import { IHandleResponseOptions } from "../../../typings/services";
import { IRegisterFormData } from "../../../typings/users";
import { USERS_ROUTE, REGISTER } from "../../../config/constants";

const useRegisterUser = (responseOptions: IHandleResponseOptions) => {
  const { setAuthUser } = useContext(UsersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const registerUser = useCallback(
    (formData: IRegisterFormData) => {
      executeRequest({
        route: `/${USERS_ROUTE}/${REGISTER}`,
        data: formData,
        method: "POST",
        setState: setAuthUser,
        type: "withImage",
      });
    },
    [executeRequest, setAuthUser]
  );

  return { registerUser, isError, isSuccess, isLoading, message };
};

export default useRegisterUser;
