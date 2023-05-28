import { useCallback } from "react";

const useCheckCreationFormChanges = (formData: object) => {
  const checkChanges = useCallback(() => {
    let bool = false;

    for (const key in formData) {
      if (formData[key as keyof typeof formData]) {
        bool = true;
        break;
      }
    }

    return bool;
  }, [formData]);

  return checkChanges;
};

export default useCheckCreationFormChanges;
