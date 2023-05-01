const sanitizeRequestData = (formData: object) => {
  const obj = { ...formData };
  const keys = Object.keys(obj);

  keys.forEach((key: string) => {
    if (typeof obj[key as keyof typeof obj] === "string") {
      (obj[key as keyof typeof obj] as string) = (
        obj[key as keyof typeof obj] as string
      ).trim();

      if (!obj[key as keyof typeof obj]) delete obj[key as keyof typeof obj];
    }
  });

  return obj;
};

export default sanitizeRequestData;
