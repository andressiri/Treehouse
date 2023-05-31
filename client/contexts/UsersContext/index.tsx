import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IUsersContext,
  Users,
  User,
} from "../../typings/contexts";

export const UsersContext = createContext<IUsersContext>({
  users: [],
  setUsers: () => [],
  user: {},
  setUser: () => {
    return {};
  },
});

export const UsersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<Users>([]);
  const [user, setUser] = useState<User>({});

  return (
    <UsersContext.Provider
      value={{
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
