import React from 'react';
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask}) {
  return (
    <div>
        <ul className="task-list">
            {tasks
            .filter((task)=>showIncomplete ? task.status !== 1 : true)
            .map((task)=> (
                <TaskItem 
                key={task.id}
                task={task} 
                showIncomplete={showIncomplete} 
                setTaskStatus={setTaskStatus} 
                removeTask={removeTask}></TaskItem>
            ))}
        </ul>
        <div className = "filter-wrapper">
            <label htmlFor="filter" className="filter-label">Show incomplete tasks only</label>
            <input 
            type ="checkbox" 
            id="filter" 
            checked={showIncomplete}
            onChange={(e) => setShowIncomplete(e.target.checked)}></input>
        </div>
    </div>
  );
}

export default TaskList;
