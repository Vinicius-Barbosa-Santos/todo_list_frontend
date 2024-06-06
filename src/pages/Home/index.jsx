import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/SideBar";
import { Tasks } from "../../components/Tasks";

import "./style.scss";
import { useEffect } from "react";

export const Home = () => {
  const params = useParams();

  useEffect(() => {
    console.log({ params });
  }, [params]);

  return (
    <div className="home-container">
      <Sidebar />
      <Tasks />
    </div>
  );
};
