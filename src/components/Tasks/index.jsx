import { useCallback, useEffect, useMemo, useState } from "react";
import { AddTask } from "../AddTask";
import { api } from "../../services/axios";
import "./style.scss";
import { useAlert } from "react-alert";
import TaskItem from "../TaskItem";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const alert = useAlert();

  const fetchGetTasks = useCallback(async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (_error) {
      alert.error("Não foi possível recuperar as tarefas.");
    }
  }, [alert]);

  useEffect(() => {
    fetchGetTasks();
  }, [fetchGetTasks]);

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted);
  }, [tasks]);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask fetchTasks={fetchGetTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask) => (
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
          {completedTasks.map((completedTask) => (
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
