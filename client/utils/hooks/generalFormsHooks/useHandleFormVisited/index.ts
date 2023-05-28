import { useCallback } from "react";

interface Props {
  formVisited: object;
  setFormVisited: React.Dispatch<React.SetStateAction<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const useGetRoomFormState = ({ formVisited, setFormVisited }: Props) => {
  const handleVisited = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      if (formVisited[e.target.name as keyof typeof formVisited]) return;

      setFormVisited({
        ...formVisited,
        [e.target.name]: true,
      });
    },
    [formVisited, setFormVisited]
  );

  return handleVisited;
};

export default useGetRoomFormState;
