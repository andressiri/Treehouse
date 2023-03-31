import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledBackdrop } from "./styledComponents";

const Spinner: FC = () => {
  return (
    <StyledBackdrop open={true}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
};

export default Spinner;
