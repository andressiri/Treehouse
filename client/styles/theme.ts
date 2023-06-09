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
    fontFamily: "'Nunito Sans', sans-serif",
  },
  custom: {
    buttons: {
      height: "56px",
      disabledBackground: "rgba(130, 130, 130, 1)",
      disabledColor: "rgba(0, 0, 0, 0.26)",
      fontSizeMd: "18px",
    },
    radius: {
      medium: "16px",
    },
    sidebar: {
      width: "300px",
    },
    header: {
      height: "120px",
    },
  },
});
