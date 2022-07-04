import React, {useState} from 'react';
import "./App.css";
import AddTaskForm from './components/AddTaskForm';
import "./components/Header";
import TaskList from './components/TaskList';

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

        const setTaskStatus = (taskId,status) => {
            setTasks (
                tasks.map((task) => {
                    if (task.id === taskId) {
                        return {...task,status : status ? 1:0};
                    }
                    return task;
            })
        );
    };

    const removeTask = (taskId) => {
        setTasks (task.filter((task) => task.id !== taskId))
    };

  return (
    <div className ="container">
        <Header title ="Todo List" subtitle="Get things done"></Header>
        <TaskList 
        tasks={tasks} 
        showIncomplete={showIncomplete} 
        setTaskStatus={setTaskStatus} 
        removeTask={removeTask}></TaskList>
        
        <AddTaskForm newTask={newTask} handleSubmit={handleSubmit} handleInputChange={handleInputChange}></AddTaskForm>
    </div>
  );
}

export default App;
