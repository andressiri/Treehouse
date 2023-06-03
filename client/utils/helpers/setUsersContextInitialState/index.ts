import React from "react";
import { AuthUser, IUsersContext } from "../../../typings/contexts";

const setUsersContextInitialState = (): IUsersContext => {
  let storedUser;
  let userRemembered = false;

  if (typeof window !== "undefined") {
    const localStorageUser = localStorage.getItem("authUser");
    const sessionStorageUser = sessionStorage.getItem("authUser");
    storedUser = localStorageUser || sessionStorageUser;

    const localStorageRemember = localStorage.getItem("rememberUser");
    const sessionStorageRemember = sessionStorage.getItem("rememberUser");
    userRemembered = Boolean(localStorageRemember || sessionStorageRemember);
  }

  let authUser: AuthUser = {};

  if (storedUser && userRemembered) {
    authUser = JSON.parse(storedUser);
  }

  return {
    authUser,
    setAuthUser: () => authUser,
    remember: React.createRef<boolean | null>(),
    users: [],
    setUsers: () => [],
    user: {},
    setUser: () => {
      return {};
    },
  };
};

export default setUsersContextInitialState;
