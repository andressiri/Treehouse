import axios from "axios";
import { v4 } from "uuid";
import { API_ORIGIN, API_ROUTE, API_VERSION } from "../../../config/constants";

interface ErrorWithResponse extends Error {
  response: {
    data: {
      message: string;
    };
  };
}

const axiosInstance = async (endpoint: string, data = {}, method = "GET") => {
  // const user = JSON.parse(localStorage.getItem("user"));
  // const temporaryToken = JSON.parse(sessionStorage.getItem("temporaryToken"));
  // const token = user ? user.token : temporaryToken || "";
  const storageFile = sessionStorage.getItem("file");
  let contentType = "application/json";
  let formData = data;

  if (storageFile) {
    contentType = "multipart/form-data";
    formData = new FormData();
    for (const key in data) {
      (formData as FormData).append(key, data[key as keyof typeof data]);
    }
    const file = await (await fetch(storageFile)).blob();
    (formData as FormData).append("picture", file, `${v4()}.jpeg`);
  }

  try {
    const response = await axios({
      method,
      url: `${API_ORIGIN}/${API_ROUTE}/${API_VERSION}${
        !endpoint ? "" : !endpoint.startsWith("/") ? `/${endpoint}` : endpoint
      }`,
      data: formData,
      headers: {
        // authorization: `Bearer ${token}`,
        "Content-Type": contentType,
      },
    });

    sessionStorage.removeItem("file");
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

export default axiosInstance;
