import { useCallback, useContext, useEffect } from "react";
import { UsersContext } from "../../../../contexts";
import { IAuthUser } from "../../../../typings/users";

const useHandleAuthUserEffects = () => {
  const { authUser, remember } = useContext(UsersContext);
  const windowAvailable = typeof window !== "undefined";

  const clearUser = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    localStorage.removeItem("rememberUser");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }, []);

  const addBeforeUnloadEvent = useCallback(() => {
    if (windowAvailable) {
      window.addEventListener("beforeunload", (e) => {
        e.preventDefault();

        if (!remember.current) clearUser();
      });
    }
  }, [remember, windowAvailable, clearUser]);

  useEffect(() => {
    addBeforeUnloadEvent();
  }, [addBeforeUnloadEvent]);

  useEffect(() => {
    if ((authUser as IAuthUser).token && windowAvailable) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      localStorage.setItem("token", (authUser as IAuthUser)?.token);

      sessionStorage.setItem("authUser", JSON.stringify(authUser));
      sessionStorage.setItem("token", (authUser as IAuthUser)?.token);

      document.cookie = `token=${
        (authUser as IAuthUser)?.token
      }; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

      if (remember.current) localStorage.setItem("rememberUser", "true");

      return;
    }

    if (windowAvailable) clearUser();
  }, [authUser, remember, windowAvailable, clearUser]);
};

export default useHandleAuthUserEffects;
