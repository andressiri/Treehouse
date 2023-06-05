import React from "react";
import { AuthUser, IUsersContext } from "../../../typings/contexts";

interface ReturnObj {
  usersContext: IUsersContext;
  userRemembered: boolean;
}

const setUsersContextInitialState = (): ReturnObj => {
  let localStorageUser;
  let userRemembered = false;

  if (typeof window !== "undefined") {
    localStorageUser = localStorage.getItem("authUser");

    const localStorageRemember = localStorage.getItem("rememberUser");
    userRemembered = Boolean(localStorageRemember);
  }

  let authUser: AuthUser = {};

  if (localStorageUser) {
    authUser = JSON.parse(localStorageUser);
  }

  return {
    usersContext: {
      authUser,
      setAuthUser: () => authUser,
      remember: React.createRef<boolean | null>(),
      users: [],
      setUsers: () => [],
      user: {},
      setUser: () => {
        return {};
      },
    },
    userRemembered,
  };
};

export default setUsersContextInitialState;
