import EmployeeCard from "./components/EmployeeCard"
import StudendCard from "./components/StudentCard"
import StudentList from "./components/StudentList"
const App = () => {

  const studObj = { name: "Sangeetha", age: 28, course: "Frontend", isPlaced: true }

  const empObj = { name: "Rahul", email: "rahul@gmail.com", city: "Villupuram", experience: "4 years" }

  const students = [
    {
      id: 1,
      name: "Praveen",
      course: "React JS"
    },
    {
      id: 2,
      name: "Sangeetha",
      course: "Python"
    },
    {
      id: 3,
      name: "Vishwa",
      course: "Java"
    },
    {
      id: 4,
      name: "Nirmal",
      course: "Full Stack Development"
    },
    {
      id: 5,
      name: "Priya",
      course: "Data Science"
    }
  ];
  return (
    <>
      <StudendCard student={studObj} />
      <EmployeeCard employee={empObj} />
      <StudentList studentData ={students}/>
    </>
  )
}

export default App