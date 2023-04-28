import React, { createContext, FC, useState } from "react";
import { IContextProviderProps, IRoomsContext } from "../../typings/contexts";
import { IRoom, IRoomWithRelations } from "../../typings/rooms";
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
  const [rooms, setRooms] = useState<IRoom[] | IRoomWithRelations[] | []>([]);
  const [room, setRoom] = useState<IRoom | IRoomWithRelations | object>({});
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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
