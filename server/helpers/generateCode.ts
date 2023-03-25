// generate verification code

const generateCode = (): string => {
  const randomNum = Math.floor(Math.random() * 1000000);

  let codeString = randomNum.toString();

  while (codeString.length < 6) {
    codeString = `0${codeString}`;
  }

  return codeString;
};

export default generateCode;
