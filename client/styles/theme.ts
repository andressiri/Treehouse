import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "rgba(30, 72, 201, 1)",
      light: "rgba(147, 201, 255, 1)",
      dark: "rgba(21, 81, 141, 1)",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      main: "rgba(25, 225, 225, 1)",
      light: "rgba(142, 255, 255, 1)",
      dark: "rgba(18, 157, 157, 1)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "'Kanit', sans-serif",
  },
  custom: {
    buttons: {
      fontSizeMd: "18px",
    },
    radius: {
      medium: "16px",
    },
  },
});
