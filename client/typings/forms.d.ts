import { InputLabelProps } from "@mui/material";
import { IRoomFormData, IRoomFormVisited } from "./rooms";

export interface SelectOption {
  value?: string;
  name: string;
}

export interface SharedTextFieldProps {
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  select?: boolean;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
  conditionalHelperText?: boolean;
  onChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void);
  children?: JSX.Element | JSX.Element[];
}

export interface TextFieldProps extends SharedTextFieldProps {
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  name: string;
  label: string;
  variant?: "standard" | "filled" | "outlined";
  InputLabelProps?: Partial<InputLabelProps>;
}

interface IFormFieldSpecifics extends Omit<SharedTextFieldProps, "onChange"> {
  field: string;
}

export type formFieldsData = IRoomFormData;

export type formFieldsVisited = IRoomFormVisited;

export interface FormFieldProps extends SharedTextFieldProps {
  field: string;
  formData: formFieldsData;
  formVisited?: formFieldsVisited;
  handleVisited?: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export interface IFormProps {
  formData: formFieldsData;
  formVisited: formFieldsVisited;
  formFieldsSpecificsArray: IFormFieldSpecifics[];
  handleVisited: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleOnChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  checkChanges: () => boolean;
  handleSubmit: (e: React.FormEvent<HTMLDivElement>) => void;
  handleCancel: () => void;
  errorMessage: string;
  disableSubmit: boolean;
  buttonText: string;
}
