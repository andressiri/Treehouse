import { SelectOption } from "../../../typings/forms";

const getSelectGenderArray = () => {
  const genderArray: SelectOption[] = [
    {
      value: "female",
      name: "Female",
    },
    {
      value: "male",
      name: "Male",
    },
    {
      value: "intersex",
      name: "Intersex",
    },
    {
      value: "trans",
      name: "Trans",
    },
    {
      value: "non-conforming",
      name: "Non-conforming",
    },
    {
      value: "personal",
      name: "Personal",
    },
    {
      value: "eunuch",
      name: "Eunuch",
    },
  ];

  return genderArray;
};

export default getSelectGenderArray;
