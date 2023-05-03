import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const lineHeight = 26;

export const TextFieldStyled = styled(TextField, {
  shouldForwardProp: (prop) =>
    !["isError", "rowsNumber", "conditionalHelperText"].includes(
      prop as string
    ),
})<{ isError?: boolean; rowsNumber: number; conditionalHelperText?: boolean }>(
  ({ theme, isError, rowsNumber, conditionalHelperText }) => ({
    width: "100%",
    minHeight: conditionalHelperText
      ? `calc(${theme.custom.buttons.height} + 25px + ${
          rowsNumber - 1
        } * ${lineHeight}px - ${rowsNumber > 1 ? 4 : 0}px)`
      : theme.custom.buttons.height,
    margin: "0px",
    borderRadius: theme.custom.radius.medium,
    "&:hover, &:focus": {
      "& .MuiOutlinedInput-root, & .MuiFormLabel-root": {
        color: `${theme.palette.primary.main}`,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
    },
    "& .MuiOutlinedInput-root": {
      minHeight: theme.custom.buttons.height,
      padding: "13px 15px",
      background: theme.palette.primary.contrastText.replace("0.87)", "1)"),
      color: theme.palette.secondary.contrastText,
      fontSize: theme.custom.buttons.fontSizeMd,
      fontWeight: 400,
      lineHeight: `${26}px`,
      borderRadius: theme.custom.radius.medium,
      "&:hover fieldset, &:focus fieldset": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      input: {
        "&:-webkit-autofill": {
          borderRadius: "0px",
          WebkitBoxShadow: `0 0 0 200px ${theme.palette.primary.contrastText.replace(
            "0.87)",
            "1)"
          )} inset !important`,
          WebkitTextFillColor: theme.palette.secondary.contrastText,
        },
      },
    },
    "& .MuiFormLabel-root": {
      color: isError
        ? theme.palette.error.main
        : theme.palette.secondary.contrastText,
      fontSize: theme.custom.buttons.fontSizeMd,
      fontWeight: 400,
    },
    "& .MuiOutlinedInput-input": {
      padding: "0px",
      color: theme.palette.secondary.contrastText,
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.contrastText}`,
      borderRadius: theme.custom.radius.medium,
    },
  })
);
