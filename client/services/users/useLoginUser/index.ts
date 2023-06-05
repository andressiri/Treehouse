import { useCallback, useContext } from "react";
import { UsersContext } from "../../../contexts";
import { useServiceInstance } from "../../../utils/hooks";
import { IHandleResponseOptions } from "../../../typings/services";
import { ILoginFormData } from "../../../typings/users";
import { USERS_ROUTE, LOGIN } from "../../../config/constants";

const useLoginUser = (responseOptions: IHandleResponseOptions) => {
  const { setAuthUser } = useContext(UsersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const loginUser = useCallback(
    (formData: ILoginFormData) => {
      executeRequest({
        route: `/${USERS_ROUTE}/${LOGIN}`,
        data: formData,
        method: "POST",
        setState: setAuthUser,
      });
    },
    [executeRequest, setAuthUser]
  );

  return { loginUser, isError, isSuccess, isLoading, message };
};

export default useLoginUser;
