const sanitizeObject = (obj: object) => {
  const keys = Object.keys(obj);

  keys.forEach((key: string) => {
    if (!obj[key as keyof typeof obj]) delete obj[key as keyof typeof obj];
  });

  return obj;
};

export default sanitizeObject;
