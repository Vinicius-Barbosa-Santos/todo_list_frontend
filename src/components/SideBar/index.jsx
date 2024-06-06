import { CustomButton } from "./CustomButton";

import "./style.scss";
import logo from "../assets/images/logo.png";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Full Stack Club" />
      </div>

      <div className="sign-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};
