import { useContext, useMemo } from "react";
import { TeachersContext } from "../../../contexts";
import { useGetTeachersWithRelationsEffect } from "../../../services";
import { IRoom } from "../../../typings/rooms";

const useGetAvailableTeachers = (roomId?: number) => {
  const { teachersWithRelations } = useContext(TeachersContext);

  useGetTeachersWithRelationsEffect({ errorToast: true });

  const availableTeachersArray = useMemo(() => {
    return teachersWithRelations.filter((teacher) => {
      if ((teacher.Room as IRoom)?.id && (teacher.Room as IRoom).id !== roomId)
        return false;

      return true;
    });
  }, [roomId, teachersWithRelations]);

  return availableTeachersArray;
};

export default useGetAvailableTeachers;
