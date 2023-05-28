import { FC } from "react";
import { MenuItem } from "@mui/material";
import { StyledTextField } from "../../../components/Atoms";
import { useGetRoomsArray } from "../../../utils/hooks";

interface Props {
  value: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  showTeacherless?: boolean;
  teacherId?: number;
}

const RoomSelect: FC<Props> = ({
  value,
  name,
  onChange,
  showTeacherless,
  teacherId,
}) => {
  const roomsArray = useGetRoomsArray({ showTeacherless, teacherId });

  return (
    <StyledTextField
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
    </StyledTextField>
  );
};

export default RoomSelect;
