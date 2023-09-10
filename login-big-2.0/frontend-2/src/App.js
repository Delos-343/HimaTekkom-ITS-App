import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
