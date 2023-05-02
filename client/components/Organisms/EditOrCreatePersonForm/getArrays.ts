interface SelectArray {
  value: string;
  label: string;
}

const getArrays = () => {
  const genderArray: SelectArray[] = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "intersex",
      label: "Intersex",
    },
    {
      value: "trans",
      label: "Trans",
    },
    {
      value: "non-conforming",
      label: "Non-conforming",
    },
    {
      value: "personal",
      label: "Personal",
    },
    {
      value: "eunuch",
      label: "Eunuch",
    },
  ];

  return { genderArray };
};

export default getArrays;
