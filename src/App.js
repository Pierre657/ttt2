import { Routes, Route } from "react-router-dom";

import "./css/app.css";

import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Technoadd from "./Pages/Technoadd";
import Technolist from "./Pages/Technolist";


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Technoadd />} />
        <Route path="/list" element={<Technolist />} />
      </Routes>
    </>
  );
}

export default App;
