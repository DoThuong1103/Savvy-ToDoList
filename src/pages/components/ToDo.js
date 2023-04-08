import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
export default function ToDo({
  toDos,
  toDoFilter,
  maskDone,
  setUpDate,
  deleteTask,
}) {
  return (
    <div>
      <div className="toDoList__items">
        {toDoFilter
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <>
                <div className="toDoList__item">
                  <div
                    className={
                      task.address === true
                        ? "done toDoList__item-text"
                        : "toDoList__item-text"
                    }
                  >
                    <h2 className="toDo-title">{task.title}</h2>
                    {/* <p className="toDo-content">{task.content}</p> */}
                  </div>
                  <div className="toDoList__item-icon">
                    <span title="Completed" onClick={() => maskDone(task.id)}>
                      <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    </span>
                    {task.address ? null : (
                      <span
                        title="Edit"
                        onClick={() => {
                          setUpDate({
                            id: task.id,
                            title: task.title,
                            address: task.address ? true : false,
                          });
                        }}
                      >
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </span>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
