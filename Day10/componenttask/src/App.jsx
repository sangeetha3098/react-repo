import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Banner from "./pages/Student"
import Navbar from "./components/Navbar"
import EmployeeDetails from "./components/EmployeeDetails"
import Details from "./components/Details"
import ProductDetail from "./components/ProductDetail"
import MoviePage from "./components/MoviePage"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<EmployeeDetails />} />
        <Route path='/student' element={<Details />} />
        <Route path='/product' element={<ProductDetail />} />
         <Route path='/movie' element={<MoviePage />} />
      </Routes>
    </>
  )
}

export default App