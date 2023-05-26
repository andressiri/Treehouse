export type RequestMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

type RequestType = "basic" | "withAuth" | "withImage" | "withAuthAndImage";

export interface RequestHelpersProps {
  route: string;
  baseUrl?: string;
  data?: object;
  method?: RequestMethod;
  contentType?: string;
  headers?: object;
}

export interface RequestWithAuthProps extends RequestHelpersProps {
  type?: RequestType;
}

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

interface ExecuteProps extends RequestHelpersProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState?: React.Dispatch<React.SetStateAction<any>>; // Using SetServiceState would result in the error TS2590: Expression produces a union type that is too complex to represent.
  type?: RequestType;
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
