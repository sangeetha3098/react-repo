import Employee from "../pages/Employee"
import Home from "../pages/Home"

const Products = () => {
  const empObj = [
    { name: "Suresh", email: "suresh@gmail.com", department: "IT" },
    { name: "priya", email: "oriya@gmail.com", department: "IT" },
    { name: "Natania", email: "natani@gmail.com", department: "IT" },
  ]
  return (
    <>
      <div>
        <Employee data={empObj} />

      </div>
    </>
  )
}

export default Products