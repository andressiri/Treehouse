const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-z0-9+.~_-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/);
};

export default validateEmail;
