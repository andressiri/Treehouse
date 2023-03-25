// Mail template for code verification

const codeMail = (userName: string, code: number) => {
  return `
    <h1>Regards from Treehouse!</h1>
    <p>Hello ${userName}! In order to verify your identity you should use the following code:</p>
    <h2>${code}</h2>
    <p>Sorry for the trouble, have a good day!</p>`;
};

export default codeMail;
