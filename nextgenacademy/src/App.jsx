import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home,About, SignUp, Login} from "./pages/pages_index.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
