import { FC } from "react";
import { MenuItem } from "@mui/material";
import { StyledSelect } from "../../../components/Atoms";
import useGetRoomsArray from "./useGetRoomsArray";

interface Props {
  value: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  showJustTeacherless?: boolean;
}

const RoomSelect: FC<Props> = ({
  value,
  name,
  onChange,
  showJustTeacherless,
}) => {
  const roomsArray = useGetRoomsArray(showJustTeacherless);

  return (
    <StyledSelect
      disabled={roomsArray.length < 2}
      select={true}
      value={value}
      name={name}
      onChange={onChange}
      label={roomsArray.length < 2 ? "No rooms available" : "Room"}
      variant="outlined"
      InputLabelProps={value ? { shrink: true } : {}}
    >
      {roomsArray.map(
        (
          option: any, // eslint-disable-line @typescript-eslint/no-explicit-any
          id: number
        ) => (
          <MenuItem key={`${option.name}${id}`} value={option.id}>
            {option.name}
          </MenuItem>
        )
      )}
    </StyledSelect>
  );
};

export default RoomSelect;
