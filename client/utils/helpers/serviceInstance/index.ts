import { axiosInstance, sanitizeObject } from "../../../utils/helpers";
import { IServiceHandlers } from "../../../typings/contexts";

interface Props {
  route: string;
  method?: string;
  context: IServiceHandlers;
  setState?:
    | React.Dispatch<React.SetStateAction<object>>
    | React.Dispatch<React.SetStateAction<never[]>>;
  formData?: object;
  sanitizeData?: boolean;
}

const serviceInstance = async ({
  route,
  method,
  context,
  setState,
  formData,
  sanitizeData,
}: Props) => {
  const { setIsError, setIsSuccess, setIsLoading, setMessage } = context;
  const notGetRequest = method && method !== "GET";

  setIsLoading(true);

  try {
    const data = sanitizeData ? sanitizeObject({ ...formData }) : formData;

    const response = await axiosInstance(route, data, method || "GET");

    if (setState) setState(notGetRequest ? response.data : response);
    if (notGetRequest) setMessage(response.message);
    setIsSuccess(true);
  } catch (err) {
    setMessage(`${err}`);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

export default serviceInstance;
