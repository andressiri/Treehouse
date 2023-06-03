import React, { createContext, FC, useState } from "react";
import { setUsersContextInitialState } from "../../utils/helpers";
import { useHandleAuthUserEffects } from "../../utils/hooks";
import {
  IContextProviderProps,
  IUsersContext,
  Users,
  User,
} from "../../typings/contexts";

export const UsersContext = createContext<IUsersContext>(
  setUsersContextInitialState()
);

export const UsersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const initialState = setUsersContextInitialState();
  const [authUser, setAuthUser] = useState<User>(initialState.authUser);
  const [remember, setRemember] = useState(initialState.remember);
  const [users, setUsers] = useState<Users>([]);
  const [user, setUser] = useState<User>({});

  useHandleAuthUserEffects();

  return (
    <UsersContext.Provider
      value={{
        authUser,
        setAuthUser,
        remember,
        setRemember,
        users,
        setUsers,
        user,
        setUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
