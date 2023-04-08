import React from "react";

const AddTask = ({
  newTitle,
  setNewTitle,
  newContent,
  setNewContent,
  addTask,
}) => {
  return (
    <div>
      <div className="toDoList__add">
        <input
          className="toDoList__add-input"
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter task"
          name=""
          id=""
          required
        />
        {/* <input
          className="toDoList__add-input"
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Enter content"
          name=""
          id=""
          required
        /> */}
        <button className="toDoList__btn" onClick={addTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
