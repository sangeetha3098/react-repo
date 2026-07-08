import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Help from "./components/Help";
import Navbar from "./components/Navbar"
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
};

export default App;
