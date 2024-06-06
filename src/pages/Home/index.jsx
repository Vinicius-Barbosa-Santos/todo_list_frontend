import { Sidebar } from "../../components/SideBar";
import { Tasks } from "../../components/Tasks";

import "./style.scss";

export const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Tasks />
    </div>
  );
};
