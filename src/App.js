import React, {useState} from 'react';
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([
        {id :"task_1", title:"Learn JS", status: 0},
        {id:"task_2", title:"Code a Todo List", status: 0},
      ]);

      const [showIncomplete, setShowIncomplete] = useState(false);
      const [newTask, setNewTask] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            const task = {
                id: Date.now(),
                title: newTask,
                status: 0,
            };
            setTask([...tasks,task]);
            setNewTask("");
            }
        };

        const handleInputChange = (e) =>{
            setNewTask(e.target.value);
        };

        const setTaskStatus = (taskId)
  return (
    <div>


    </div>
  );
}

export default App;
