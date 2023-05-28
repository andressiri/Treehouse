import { useState } from "react";
import { useHandleFormChange, useHandleFormVisited } from "../..";
import { IRoom } from "../../../../typings/rooms";
import {
  IPersonFormData,
  IPersonFormVisited,
} from "../../../../typings/persons";
import { IStudent } from "../../../../typings/students";
import { ITeacherWithRelations } from "../../../../typings/teachers";

interface Props {
  person?: IStudent | ITeacherWithRelations;
}

const useGetPersonFormState = ({ person }: Props) => {
  const [formData, setFormData] = useState<IPersonFormData>({
    name: person?.name || "",
    age: person?.age ? `${person.age}` : "",
    gender: person?.gender || "",
    description: person?.description || "",
    roomId: (person as IStudent)?.roomId
      ? `${(person as IStudent)?.roomId}`
      : ((person as ITeacherWithRelations)?.Room as IRoom)?.id
      ? `${((person as ITeacherWithRelations)?.Room as IRoom)?.id}`
      : "",
  });
  const [formVisited, setFormVisited] = useState<IPersonFormVisited>({
    name: false,
    age: false,
    gender: false,
    description: false,
    roomId: false,
  });

  const handleOnChange = useHandleFormChange({ formData, setFormData });

  const handleVisited = useHandleFormVisited({ formVisited, setFormVisited });

  return {
    formData,
    setFormData,
    handleOnChange,
    formVisited,
    setFormVisited,
    handleVisited,
  };
};

export default useGetPersonFormState;
