import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMsgError = (msg) => {
  toast.error(`${msg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const ToastMsgWarn = (msg) => {
  toast.warn(`${msg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

const ToastMsgSuc = (msg) => {
  toast.success(`${msg}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export { ToastMsgError, ToastMsgWarn, ToastMsgSuc };
