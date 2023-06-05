import { useState } from "react";
import { useHandleFormChange, useHandleFormVisited } from "../../..";
import {
  ILoginFormData,
  ILoginFormVisited,
} from "../../../../../typings/users";

const useGetLoginFormState = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
  });
  const [formVisited, setFormVisited] = useState<ILoginFormVisited>({
    email: false,
    password: false,
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

export default useGetLoginFormState;
