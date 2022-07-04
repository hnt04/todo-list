import React, {useState} from 'react';
import "./App.css";
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
        
        <div className = "filter-wrapper">
            <label htmlFor="filter" className="filter-label">Show incomplete tasks only</label>
            <input 
            type ="checkbox" 
            id="filter" 
            checked={showIncomplete}
            onChange={(e) => setShowIncomplete(e.target.checked)}></input>
        </div>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="new-item">Add to the Todo List</label>
            <input 
            type ="type"
            id="new-item"
            value={newTask}
            onChange={handleInputChange}></input>
            <button type="submit">Add Item</button>
        </form>
    </div>
  );
}

export default App;
