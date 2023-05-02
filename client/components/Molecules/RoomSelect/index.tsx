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
  teacherId?: number;
}

const RoomSelect: FC<Props> = ({ value, name, onChange, teacherId }) => {
  const roomsArray = useGetRoomsArray(teacherId);

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
      {roomsArray.map((option, id) => (
        <MenuItem key={`${option.name}${id}`} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default RoomSelect;
