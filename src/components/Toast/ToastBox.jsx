import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastBox = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ToastBox;

//   Go for explore more tasty Toast!   ===>    https://fkhadra.github.io/react-toastify/introduction
