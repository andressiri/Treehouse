import { styled } from "@mui/material/styles";
import { FormControlLabel, FormGroup } from "@mui/material";

export const StyledFormGroup = styled(FormGroup)(() => ({
  margin: "50px auto 10px auto",

  display: "flex",
  alignItems: "center",
}));

export const RememberLabel = styled(FormControlLabel)(() => ({
  "& svg": {
    width: "32px",
    height: "32px",
  },
  "& span": {
    fontSize: "24px",
    fontWeight: 600,
  },
}));
