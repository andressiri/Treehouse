import { useEffect, useContext } from "react";
import { RoomsContext } from "../../../contexts";

const useResolveRoomsErrors = () => {
  const { isError, setIsError, message, setMessage } = useContext(RoomsContext);

  useEffect(() => {
    if (isError) {
      // eslint-disable-next-line
      console.log(message); // This should be a toast
      setIsError(false);
      setMessage("");
    }
  }, [isError, message, setIsError, setMessage]);
};

export default useResolveRoomsErrors;
