import { IPersonFormData } from "../../../typings/persons";
import { IRoomFormData } from "../../../typings/rooms";

const sanitizeFormChanges = (
  formData: IRoomFormData | IPersonFormData,
  objectToCompare: object,
  shouldBreak?: boolean
): Partial<IRoomFormData> | Partial<IPersonFormData> | boolean => {
  const obj = { ...formData };
  let emptyObj = true;

  for (const key in obj) {
    const formDataItem = obj[key as keyof typeof obj];
    const objectToCompareItem =
      objectToCompare[key as keyof typeof objectToCompare];

    const stringToCompare =
      typeof objectToCompareItem === "string"
        ? objectToCompareItem
        : objectToCompareItem
        ? `${objectToCompareItem}`
        : "";

    if (formDataItem === stringToCompare) {
      delete obj[key as keyof typeof obj];
    } else {
      emptyObj = false;
      if (!formDataItem)
        (obj[key as keyof typeof obj] as string | undefined) = "";
      if (shouldBreak) break;
    }
  }

  return !emptyObj ? obj : false;
};

export default sanitizeFormChanges;
