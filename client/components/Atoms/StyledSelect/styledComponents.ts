import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)(() => ({
  width: "100%",
  margin: "0px",
  background: "white",
  borderRadius: "8px",
  "& .MuiOutlinedInput-root, & .MuiFormLabel-root": {
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "17px 12px 7px 12px",
  },
  "& .MuiInputLabel-outlined": {
    fontSize: "20px",
  },
  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {},
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    borderWidth: "2px",
  },
}));
