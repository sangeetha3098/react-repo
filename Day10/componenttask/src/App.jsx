import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Banner from "./pages/Banner"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Details from "./components/Details"

const App = () => {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/banner' element={<Details />} />
      </Routes>
    </>
  )
}

export default App