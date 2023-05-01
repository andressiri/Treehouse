import React, { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IRoomsContext,
  Rooms,
  RoomsWithRelations,
  Room,
  RoomWithRelations,
} from "../../typings/contexts";

export const RoomsContext = createContext<IRoomsContext>({
  rooms: [],
  setRooms: () => [],
  roomsWithRelations: [],
  setRoomsWithRelations: () => [],
  room: {},
  setRoom: () => {
    return {};
  },
  roomWithRelations: {},
  setRoomWithRelations: () => {
    return {};
  },
});

export const RoomsContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [rooms, setRooms] = useState<Rooms>([]);
  const [roomsWithRelations, setRoomsWithRelations] =
    useState<RoomsWithRelations>([]);
  const [room, setRoom] = useState<Room>({});
  const [roomWithRelations, setRoomWithRelations] = useState<RoomWithRelations>(
    {}
  );

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        roomsWithRelations,
        setRoomsWithRelations,
        room,
        setRoom,
        roomWithRelations,
        setRoomWithRelations,
      }}
    >
      {children}
    </RoomsContext.Provider>
  );
};
