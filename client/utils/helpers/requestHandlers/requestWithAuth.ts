import { toast } from "react-toastify";
import { makeRequest, requestWithImage } from "./";
import { RequestWithAuthProps } from "../../../typings/services";
import { API_CONTENT_TYPE } from "../../../config/constants";

const requestWithAuth = async ({
  route,
  baseUrl,
  data = {},
  method = "GET",
  type = "withAuth",
  contentType = API_CONTENT_TYPE,
}: RequestWithAuthProps) => {
  const localStorageToken = localStorage.getItem("token");
  const temporaryToken = sessionStorage.getItem("temporaryToken");

  if (!localStorageToken && !temporaryToken) {
    toast.error("Authentication required");
    return;
  }

  const token = localStorageToken
    ? JSON.parse(localStorageToken)
    : JSON.parse(temporaryToken as string);

  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": contentType,
  };

  const paramsObj = {
    route,
    baseUrl,
    data,
    method,
    contentType,
    headers,
  };

  try {
    if (type === "withAuth") {
      const response = await makeRequest(paramsObj);
      return response;
    }

    const response = await requestWithImage(paramsObj);
    return response;
  } catch (err) {
    if (err instanceof Error) throw err;
    throw new Error(`${err}`);
  }
};

export default requestWithAuth;
