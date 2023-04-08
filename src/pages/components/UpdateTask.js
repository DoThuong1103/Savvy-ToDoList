import React from "react";

const UpdateTask = ({ upDate, changeTitle, updateTask, canelUpdate }) => {
  return (
    <div>
      <div className="toDoList__add">
        <input
          className="toDoList__add-input"
          type="text"
          value={upDate && upDate.title}
          onChange={(e) => {
            changeTitle(e);
          }}
          name=""
          id=""
        />
        <div className="update__task-btn">
          <button className="toDoList__btn" onClick={updateTask}>
            Update
          </button>
          <button className="toDoList__btn" onClick={canelUpdate}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
