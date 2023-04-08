import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import UpdateTask from "./components/UpdateTask.js";
import ToDo from "./components/ToDo.js";

import "./ToDoList.css";
export default function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const ToDoList = () => {
    axios.get("http://localhost:8000/todos").then((res) => {
      return setToDos(res.data);
    });
  };
  useEffect(() => {
    ToDoList();
  }, []);
  const [toDoFilter, setToDoFilter] = useState([]);
  useEffect(() => {
    setToDoFilter(toDos);
  }, [toDos]);
  const [newTitle, setNewTitle] = useState("");
  const [countToDo, setCountToDo] = useState(0);

  // count task complete
  useEffect(() => {
    setCountToDo(toDos.filter((task) => task.address === true).length);
  }, [toDos]);
  // Add Task
  const addTask = () => {
    if (newTitle) {
      let newEntry = {
        id: uuidv4(),
        title: newTitle,
        address: false,
      };
      fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      })
        .then((res) => {
          // console.log(res.json());
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          ToDoList();
        });
      setNewTitle("");
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    fetch(`http://localhost:8000/todos/${id}`, {
      method: "DELETE",
    }).then(() => {});
    ToDoList();
  };

  // Update Status
  const maskDone = (id) => {
    let newTask = toDos.filter((task) => task.id === id);
    console.log(newTask[0].id);
    let newStatus = {
      id: newTask[0].id,
      title: newTask[0].title,
      address: newTask[0].address ? false : true,
    };
    fetch(`http://localhost:8000/todos/${newStatus.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStatus),
    }).then(() => {
      ToDoList();
    });
  };

  //Update Title
  const [upDate, setUpDate] = useState("");
  const canelUpdate = () => {
    setUpDate("");
  };
  const changeTitle = (e) => {
    let newEmtry = {
      id: upDate.id,
      title: e.target.value,
      address: upDate.address ? true : false,
    };
    setUpDate(newEmtry);
  };
  const updateTask = () => {
    fetch(`http://localhost:8000/todos/${upDate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upDate),
    }).then(() => {
      setUpDate("");
      ToDoList();
    });
  };
  // Filter by status
  const [filterStatus, setFilterStatus] = useState("All");
  const setGender = (event) => {
    setFilterStatus(
      event.target.value === "All"
        ? "All"
        : event.target.value === "Complete"
        ? true
        : false
    );
  };
  useEffect(() => {
    console.log(toDos);
    console.log(filterStatus);
    if (filterStatus !== "All") {
      setToDoFilter(
        toDos.filter((task) => {
          return task.address === filterStatus;
        })
      );
    } else {
      setToDoFilter(
        toDos.filter((task) => {
          return task;
        })
      );
    }
  }, [filterStatus]);

  return (
    <div className="toDoList__main">
      <div className="toDoList__dialog">
        <h1 className="toDoList__text-header">To Do List</h1>
        <div className="toDoList__dialog-body">
          {upDate && upDate ? (
            <UpdateTask
              upDate={upDate}
              changeTitle={changeTitle}
              // changeContent={changeContent}
              updateTask={updateTask}
              canelUpdate={canelUpdate}
            />
          ) : (
            <AddTask
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              // newContent={newContent}
              // setNewContent={setNewContent}
              addTask={addTask}
            />
          )}
          <div className="filterStatus" onChange={setGender.bind(this)}>
            <p>Filter By Status</p>
            <div style={{ display: "flex", columnGap: "16px" }}>
              <div>
                <input type="radio" value="All" name="status" defaultChecked />{" "}
                All
              </div>
              <div>
                <input type="radio" value="Complete" name="status" /> Complete
              </div>
              <div>
                <input type="radio" value="Todo" name="status" /> ToDo
              </div>
            </div>
          </div>
          {toDos && toDos.length ? "" : <p>No Tasks...</p>}
          <ToDo
            toDoFilter={toDoFilter}
            maskDone={maskDone}
            setUpDate={setUpDate}
            deleteTask={deleteTask}
            toDos={toDos}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: " 12px 0 0 24px",
            columnGap: "4px",
          }}
        >
          <p>{countToDo} Complete / </p>
          <p> {toDos.length} To do</p>
        </div>
      </div>
    </div>
  );
}
