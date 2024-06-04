import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import "./style.scss";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchGetTasks = async () => {
    try {
      const response = await api.get("/tasks");
      console.log(response.data);
      setTasks(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchGetTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <p key={lastTask.id}>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list"></div>
      </div>
    </div>
  );
};

export default Tasks;
