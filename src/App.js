import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <div className="App">
      {/* <Signin /> */}
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<ToDoList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
