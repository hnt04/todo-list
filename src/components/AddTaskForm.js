import React from 'react';

function AddTaskForm({newTask, handleSubmit, handleInputChange}) {
  return (
       <form onSubmit={handleSubmit} className="form">
            <label htmlFor="new-item">Add to the Todo List</label>
            <input 
            type ="type"
            id="new-item"
            value={newTask}
            onChange={handleInputChange}></input>
            <button type="submit">Add Item</button>
        </form>
  );
}

export default AddTaskForm;
