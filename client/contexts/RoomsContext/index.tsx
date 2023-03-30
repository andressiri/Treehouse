import React, { createContext, FC, useState } from "react";

interface IContext {
  rooms: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  setRooms: React.Dispatch<React.SetStateAction<never[]>>;
  room: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  setRoom: React.Dispatch<React.SetStateAction<object>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const RoomsContext = createContext<IContext>({
  rooms: [],
  setRooms: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  room: {},
  setRoom: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isError: false,
  setIsError: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isSuccess: false,
  setIsSuccess: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  isLoading: false,
  setIsLoading: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  message: "",
  setMessage: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

interface Props {
  children: React.ReactNode;
}

export const RoomsContextProvider: FC<Props> = ({ children }) => {
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
