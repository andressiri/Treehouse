import { useState } from "react";

const useCheckImageWasUploaded = () => {
  const [imageWasUploaded, setImageWasUploaded] = useState(false);

  const notifyImageWasUploaded = () => setImageWasUploaded(true);

  const notifyImageWasCanceled = () => setImageWasUploaded(false);

  return {
    imageWasUploaded,
    notifyImageWasUploaded,
    notifyImageWasCanceled,
  };
};

export default useCheckImageWasUploaded;
