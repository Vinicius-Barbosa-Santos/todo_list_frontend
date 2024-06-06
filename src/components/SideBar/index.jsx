import { CustomButton } from "../CustomButton";

import "./style.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    navigate("/login");
  };

  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Full Stack Club" />
      </div>

      <div className="sign-out">
        <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
      </div>
    </div>
  );
};
