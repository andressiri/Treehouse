import React, { createContext, FC, useState } from "react";
import { IContextProviderProps, IRoomsContext } from "../../typings/contexts";
import { serviceContextInitialValues } from "../../config/constants";

export const RoomsContext = createContext<IRoomsContext>({
  rooms: [],
  setRooms: () => [],
  room: {},
  setRoom: () => {
    return {};
  },
  ...serviceContextInitialValues,
});

export const RoomsContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        room,
        setRoom,
        isError,
        setIsError,
        isSuccess,
        setIsSuccess,
        isLoading,
        setIsLoading,
        message,
        setMessage,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
