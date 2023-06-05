const handleNumberOfTabs = (action?: "add" | "substract") => {
  const storedNumberOfTabs = localStorage.getItem("numberOfTabs");
  const numberOfTabs = storedNumberOfTabs
    ? parseInt(storedNumberOfTabs as string)
    : 0;
  let newNumberOfTabs: number = numberOfTabs;

  if (action === "add") newNumberOfTabs++;

  if (action === "substract") newNumberOfTabs--;

  localStorage.setItem("numberOfTabs", `${newNumberOfTabs}`);

  return {
    numberOfTabs,
    newNumberOfTabs,
  };
};

export default handleNumberOfTabs;
