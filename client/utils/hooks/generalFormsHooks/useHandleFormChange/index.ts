import { useCallback } from "react";

interface Props {
  formData: object;
  setFormData: React.Dispatch<React.SetStateAction<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const useHandleFormChange = ({ formData, setFormData }: Props) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]:
          typeof e.target.value === "string" ? e.target.value : "",
      });
    },
    [formData, setFormData]
  );

  return handleOnChange;
};

export default useHandleFormChange;
