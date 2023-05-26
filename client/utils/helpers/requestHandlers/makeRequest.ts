import axios from "axios";
import {
  API_ORIGIN,
  API_CONTENT_TYPE,
  API_ROUTE,
  API_VERSION,
} from "../../../config/constants";
import { RequestHelpersProps } from "../../../typings/services";

interface ErrorWithResponse extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

const makeRequest = async ({
  route = "",
  baseUrl = `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}`,
  data = {},
  method = "GET",
  contentType = API_CONTENT_TYPE,
  headers,
}: RequestHelpersProps) => {
  try {
    const response = await axios({
      method,
      url: `${baseUrl}${!route.startsWith("/") ? `/${route}` : route}`,
      data,
      headers: headers || {
        "Content-Type": contentType,
      },
    });

    return response.data;
  } catch (err) {
    if (
      err instanceof Error &&
      (err as ErrorWithResponse).response?.data?.message
    ) {
      throw new Error((err as ErrorWithResponse).response.data.message);
    } else {
      console.log("Unexpected error", err); // eslint-disable-line no-console
      throw new Error("Unexpected error");
    }
  }
};

export default makeRequest;
