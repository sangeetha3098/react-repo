import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import String from "./pages/String"
import Number from "./pages/Number"
import Boolean from "./pages/Boolean"
import NullUndefined from "./pages/NullUndefined"


const App = () => {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/string" element={<String/>}/>
    <Route path="/number" element={<Number/>}/>
    <Route path="/boolean" element={<Boolean/>}/>
    <Route path="/nullundefined" element={<NullUndefined/>}/>
   </Routes>
    </>
  )
}

export default App