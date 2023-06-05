import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AuthUser, SetAuthUser, Remember } from "../../../../typings/contexts";
import { IAuthUser } from "../../../../typings/users";
import { handleNumberOfTabs } from "../../../helpers";

const useHandleAuthUserEffects = (
  authUser: AuthUser,
  setAuthUser: SetAuthUser,
  remember: Remember
) => {
  const isTheFirstLoad = useRef(true);
  const windowAvailable = typeof window !== "undefined";
  const { push } = useRouter();

  const clearUser = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    localStorage.removeItem("rememberUser");

    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }, []);

  const handleMultipleTabs = useCallback(
    (e: StorageEvent) => {
      if (e.key !== "authUser") return;

      if (!e.newValue) {
        clearUser();
        setAuthUser({});
        push("/login");
        return;
      }

      setAuthUser(JSON.parse(e.newValue));
      push("/");
    },
    [setAuthUser, clearUser, push]
  );

  const handleBeforeUnloadEvent = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault();
      const { newNumberOfTabs } = handleNumberOfTabs("substract");

      if (!remember?.current && newNumberOfTabs < 1) {
        clearUser();
        localStorage.removeItem("numberOfTabs");
      }
    },
    [remember, clearUser]
  );

  useEffect(() => {
    if (windowAvailable) {
      if (isTheFirstLoad.current) {
        handleNumberOfTabs("add");
        isTheFirstLoad.current = false;
      }

      window.addEventListener("beforeunload", handleBeforeUnloadEvent);
      window.addEventListener("storage", handleMultipleTabs);
    }

    return () => {
      if (windowAvailable) {
        window.removeEventListener("beforeunload", handleBeforeUnloadEvent);
        window.removeEventListener("storage", handleMultipleTabs);
      }
    };
  }, [windowAvailable, handleBeforeUnloadEvent, handleMultipleTabs]);

  useEffect(() => {
    if ((authUser as IAuthUser)?.token && windowAvailable) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      localStorage.setItem("token", (authUser as IAuthUser)?.token);

      document.cookie = `token=${
        (authUser as IAuthUser)?.token
      }; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

      if (remember?.current) localStorage.setItem("rememberUser", "true");

      return;
    }

    if (windowAvailable) clearUser();
  }, [authUser, remember, windowAvailable, clearUser]);
};

export default useHandleAuthUserEffects;
