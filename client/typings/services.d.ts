export interface IServiceState {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface IServiceHandlers {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export type IHandleResponseServiceState = Omit<
  IServiceState,
  "isLoading" | "setIsLoading"
>;

export interface IHandleResponseOptions {
  errorCondition?: boolean;
  successCondition?: boolean;
  errorAction?: () => void;
  successAction?: () => void;
  errorToast?: boolean;
  errorMessage?: string;
  successToast?: boolean;
  successMessage?: string;
}

export interface IHandleResponseProps extends IHandleResponseOptions {
  serviceState: IHandleResponseServiceState;
}

export type ServiceStateKey =
  | "isError"
  | "setIsError"
  | "isSuccess"
  | "setIsSuccess"
  | "isLoading"
  | "setIsLoading"
  | "message"
  | "setMessage";
