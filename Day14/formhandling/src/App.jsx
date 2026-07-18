import { useState } from "react"

const App = () => {
  const [userName, setUserName] = useState("")
  const [saveData, setSaveData] = useState('')
  const [student, setStudent] = useState("")
  const [course, setCourse] = useState("")
  const [studentData, setStudentData] = useState("")
  const [courseData, setcourseData] = useState("")
  const [employee, setEmployee] = useState("")
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = useState("")
  const [employeeData, setEmployeeData] = useState("")
  const [departmentData, setDepartmentData] = useState("")
  const [salaryData, setSalaryData] = useState("")

  const [product, setProduct] = useState("")
  const [price, setprice] = useState("")
  const [category, setCategory] = useState("")
  const [productData, setProductData] = useState("")
  const [priceData, setPriceData] = useState("")
  const [categoryData, setCategoryData] = useState("")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const [nameData, setNameData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [cityData, setCityData] = useState("");
  const [ageData, setAgeData] = useState("");

  const handleUser = () => {
    setNameData(name)
    setEmailData(email)
    setCityData(city)
    setAgeData(age)
  }

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };




  const handleProduct = (e) => {
    setProduct(e.target.value)

  }

  const handlePrice = (e) => {
    setprice(e.target.value)

  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleProductSave = () => {
    setPriceData(price)
    setProductData(product)
    setCategoryData(category)

    setprice("")
    setProduct("")
    setCategory("")

  }

  const handleEmployee = (e) => {
    setEmployee(e.target.value)

  }

  const handleDepartment = (e) => {
    setDepartment(e.target.value)

  }
  const handleSalary = (e) => {
    setSalary(e.target.value)
  }

  const handleEmployeeSave = () => {
    setEmployeeData(employee)
    setDepartmentData(department)
    setSalaryData(salary)
    setEmployee("")
    setDepartment("")
    setSalary("")

  }

  const handleStudent = (e) => {
    setStudent(e.target.value)

  }

  const handleCourse = (e) => {
    setCourse(e.target.value)

  }

  const handleStudentSave = () => {
    setStudentData(student)
    setcourseData(course)
    setStudent("")
    setCourse("")
  }

  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const handleSave = () => {
    setSaveData(userName)
    setUserName("")
  }
  return (
    <>
      <div>
        <h1 className="text-xl font-bold m-4">Task 1 - Name Display</h1>
        <label className="m-4">Name</label>
        <br />
        <input type="text" value={userName} className="m-4 border-2" placeholder="Enter Your Name" onChange={handleChange} />
        <button onClick={handleSave} className="bg-blue-400 p-2 rounded-sm">Submit</button>
        <h2 className="ml-4 text-green-500">{saveData}</h2>
      </div>
      <div>
        <h1 className="text-xl font-bold m-4">Task 2 - Student Details</h1>
        <div>
          <label className="m-4">Name</label>
          <br />
          <input type="text" value={student} className="ml-4 border-2" placeholder="Enter Your Name" onChange={handleStudent} />
        </div>
        <div className="mt-2">
          <label className="ml-4">Course</label>
          <br />
          <input type="text" value={course} className="ml-4 border-2" placeholder="Enter course" onChange={handleCourse} />
        </div>

        <button onClick={handleStudentSave} className="bg-blue-400 p-2 rounded-sm ml-4 mt-4">Submit</button>
        {studentData && courseData &&
          <div className="m-4">
            <p>Name: {studentData}</p>
            <p>Course: {courseData}</p>
          </div>
        }

      </div>
      <div>
        <h1 className="text-xl font-bold m-4">Task 3 - Employee Details</h1>
        <div>
          <label className="m-4">Employee</label>
          <br />
          <input type="text" value={employee} className="ml-4 border-2" placeholder="Enter Employee name" onChange={handleEmployee} />
        </div>
        <div className="mt-2">
          <label className="ml-4">Department</label>
          <br />
          <input type="text" value={department} className="ml-4 border-2" placeholder="Enter department" onChange={handleDepartment} />
        </div>
        <div className="mt-2">
          <label className="ml-4">Salary</label>
          <br />
          <input type="number" value={salary} className="ml-4 border-2" placeholder="Enter salary" onChange={handleSalary} />
        </div>

        <button onClick={handleEmployeeSave} className="bg-blue-400 p-2 rounded-sm ml-4 mt-4">Submit</button>
        {employeeData && departmentData && salaryData &&
          <div className="m-4">
            <p>Employee Name: {employeeData}</p>
            <p>Department: {departmentData}</p>
            <p>Salary: {salaryData}</p>
          </div>
        }

      </div>
      <div>
        <h1 className="text-xl font-bold m-4">Task 4 - Product Details</h1>
        <div>
          <label className="m-4">Product Name</label>
          <br />
          <input type="text" value={product} className="ml-4 border-2" placeholder="Enter product name" onChange={handleProduct} />
        </div>
        <div className="mt-2">
          <label className="ml-4">Price</label>
          <br />
          <input type="number" value={price} className="ml-4 border-2" placeholder="Enter price" onChange={handlePrice} />
        </div>
        <div className="mt-2">
          <label className="ml-4">Category</label>
          <br />
          <input type="text" value={category} className="ml-4 border-2" placeholder="Enter category" onChange={handleCategory} />
        </div>

        <button onClick={handleProductSave} className="bg-blue-400 p-2 rounded-sm ml-4 mt-4">Submit</button>
        {productData && priceData && categoryData &&
          <div className="bg-amber-300 w-40 h-30 rounded-sm shadow-md text-center ml-4 mt-4 p-2">
            <p>Product: {productData}</p>
            <p>Price: {priceData}</p>
            <p>Category: {categoryData}</p>

          </div>
        }


      </div>
      <div>
        <h1 className="text-xl font-bold m-4">Task 5 - User profile</h1>
        <div className="ml-4">
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={handleName}
            className="border-2 "
          />
        </div>

        <div className="ml-4">
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="border-2 "
          />
        </div>

        <div className="ml-4">
          <label>City</label>
          <br />
          <input
            type="text"
            value={city}
            onChange={handleCity}
            className="border-2 "
          />
        </div>

        <div className="ml-4">
          <label>Age</label>
          <br />
          <input
            type="number"
            value={age}
            onChange={handleAge}
            className="border-2 "
          />
        </div>

        <button onClick={handleUser} className="bg-blue-400 p-2 rounded-sm ml-4 mt-4">Submit</button>
        {nameData && emailData && ageData && cityData &&
          <div className="bg-purple-500 w-50 h-40 rounded-sm shadow-md  text-white ml-4 mt-4 p-2">
            <p>Name: {nameData }</p>
            <p>Email: {emailData }</p>
            <p>Age: {ageData }</p>
            <p>City: {cityData }</p>

          </div>
        }


      </div>
    </>
  )
}

export default App