interface hasName {
  name: string;
  [x: string | number | symbol]: unknown;
}

const sortByName = (a: hasName, b: hasName) => {
  if (a.name < b.name) return -1;

  if (a.name > b.name) return 1;

  return 0;
};

export default sortByName;
