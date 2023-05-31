import { InputLabelProps, InputProps } from "@mui/material";
import { IRoomFormData, IRoomFormVisited } from "./rooms";
import { IPersonFormData, IPersonFormVisited } from "./persons";
import { IRegisterFormData, IRegisterFormVisited } from "./users";

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
  InputProps?: Partial<InputProps>;
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
  label?: string;
}

export type formFieldsData =
  | IRoomFormData
  | IPersonFormData
  | IRegisterFormData;

export type formFieldsVisited =
  | IRoomFormVisited
  | IPersonFormVisited
  | IRegisterFormVisited;

export interface FormFieldProps extends SharedTextFieldProps {
  field: string;
  label?: string;
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
  formIsLoading: boolean;
  buttonText: string;
}

export interface ImageUploadProps {
  image?: string;
  isPerson: boolean;
  notifyImageWasUploaded?: () => void;
  notifyImageWasCanceled?: () => void;
}

export interface FormsComponentsProps {
  title: string;
  imageProps: ImageUploadProps;
  formProps: IFormProps;
}
