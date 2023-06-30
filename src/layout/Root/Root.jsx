import { Outlet } from "react-router-dom";
import ToastBox from "../../components/Toast/ToastBox";
import Header from "../../shared/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Root;
