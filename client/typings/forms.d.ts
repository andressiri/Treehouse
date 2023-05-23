import { IRoomFormData, IRoomFormVisited } from "./rooms";

export interface SelectOption {
  value?: string;
  name: string;
}

export type formFieldsData = IRoomFormData;

export type formFieldsVisited = IRoomFormVisited;

interface IFormFieldSpecifics {
  field: string;
  required?: boolean;
  disabled?: boolean;
  select?: boolean;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  helperText: string;
  children?: JSX.Element | JSX.Element[];
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

interface FormFieldProps {
  field: string;
  formData: formFieldsData;
  formVisited: formFieldsVisited;
  handleVisited: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  handleOnChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  select?: boolean;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  helperText: string;
  children?: JSX.Element | JSX.Element[];
}
