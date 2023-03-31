interface SelectArray {
  value: string;
  label: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getArrays = (rooms: any, modelName: "student" | "teacher") => {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const roomsArray = rooms.filter((room: any) => {
    if (modelName === "teacher" && room.teacherId) return null;
    return true;
  });

  return { genderArray, roomsArray };
};

export default getArrays;
