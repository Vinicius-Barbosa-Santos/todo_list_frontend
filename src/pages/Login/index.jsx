import { CustomButton } from "../../components/CustomButton";

import "./style.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Full Stack Club" />
      <div className="button-container">
        <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
      </div>
    </div>
  );
};
