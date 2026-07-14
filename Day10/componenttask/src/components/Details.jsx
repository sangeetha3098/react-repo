import Student from "../pages/Student"

const Details = () => {
 const students = [
  {
    id: 1,
    name: "Praveen",
    course: "React JS"
  },
  {
   
    name: "Sangeetha",
     age: 25,
    course: "Python"
  },
  {
  
    name: "Vishwa",
     age: 28,
    course: "Java"
  },
  {
   
    name: "Nirmal",
     age: 23,
    course: "Full Stack Development"
  },
  {
   
    name: "Priya",
     age: 28,
    course: "Data Science"
  }
];
  return (
    <>
      <Student detail={students} />
    </>
  )
}

export default Details