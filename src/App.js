import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Photography from "./components/Photography/Photography";
import Project from "./components/Project/Project";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Project />} path="/project/:id" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Photography />} path="/photography" />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
