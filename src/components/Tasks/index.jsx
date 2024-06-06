import { useEffect, useState } from "react";
import { AddTask } from "../AddTask";
import { api } from "../../services/axios";
import "./style.scss";
import { useAlert } from "react-alert";
import TaskItem from "../TaskItem";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const alert = useAlert()

  const fetchGetTasks = async () => {
    try {
      const response = await api.get("/tasks");
      console.log(response.data);
      setTasks(response.data);
    } catch (_error) {
      alert.error('Não foi possível recuperar as tarefas.')
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
        <AddTask fetchTasks={fetchGetTasks} />
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem
                key={lastTask._id}
                task={lastTask}
                fetchTasks={fetchGetTasks}
              />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem
                key={completedTask._id}
                task={completedTask}
                fetchTasks={fetchGetTasks}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
