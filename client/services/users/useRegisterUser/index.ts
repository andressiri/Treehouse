import { useCallback, useContext } from "react";
import { UsersContext } from "../../../contexts";
import { useServiceInstance } from "../../../utils/hooks";
import { IHandleResponseOptions } from "../../../typings/services";
import { IRegisterFormData } from "../../../typings/users";
import { USERS_ROUTE, REGISTER } from "../../../config/constants";

const useRegisterUser = (responseOptions: IHandleResponseOptions) => {
  const { setUser } = useContext(UsersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const registerUser = useCallback(
    (formData: IRegisterFormData) => {
      executeRequest({
        route: `/${USERS_ROUTE}/${REGISTER}`,
        data: formData,
        method: "POST",
        setState: setUser,
        type: "withImage",
      });
    },
    [executeRequest, setUser]
  );

  return { registerUser, isError, isSuccess, isLoading, message };
};

export default useRegisterUser;
