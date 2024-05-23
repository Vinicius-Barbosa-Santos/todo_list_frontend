import { useEffect, useState } from "react";
import { api } from "./services/axios";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchGetTasks = async () => {
    try {
      const response = await api.get("/tasks");
      console.log(response.data)
      setTasks(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchGetTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default App;
