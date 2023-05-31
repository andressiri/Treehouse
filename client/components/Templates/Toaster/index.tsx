import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster: FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      newestOnTop={true}
      theme="colored"
    />
  );
};

export default Toaster;
