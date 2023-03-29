import axios from "axios";
import { v4 } from "uuid";
import { API_ORIGIN, API_ROUTE, API_VERSION } from "../../../config/constants";

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
    (formData as FormData).append("image", file, `${v4()}.jpeg`);
  }

  const response = await axios({
    method,
    url: `${API_ORIGIN}${API_ROUTE}${API_VERSION}${endpoint}`,
    data: formData,
    headers: {
      // authorization: `Bearer ${token}`,
      "Content-Type": contentType,
    },
  });

  if (response.status >= 400) {
    throw new Error(`${response}`);
  }

  sessionStorage.removeItem("file");
  return response.data;
};

export default axiosInstance;
