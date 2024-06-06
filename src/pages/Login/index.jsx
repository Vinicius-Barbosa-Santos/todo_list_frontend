import { CustomButton } from "../../components/CustomButton";

import "./style.scss";
import logo from "../../assets/images/logo.png";

export const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Full Stack Club" />
      <div className="button-container">
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  );
};
