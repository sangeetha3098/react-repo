import { useState } from "react"

const App = () => {
  const [formData, setFormData] = useState("");
  const [saveData, setSaveData] = useState([])
  const [editData, setEditData] = useState(null)
  const [name, setName] = useState("")
  const [saveName, setSaveName] = useState("")
  const [studentData, setStudentData] = useState({ studentname: "", course: "" })
  const [data, setData] = useState([])
  const [studList, setStudList] = useState("")
  const [saveStudList, setSaveStudList] = useState([])
  const [productData, setProductData] = useState({ product: "", price: "" })
  const [saveProduct, setSaveProduct] = useState([])

  const handleProduct = (e) => {
    const { name, value } = e.target
    setProductData({ ...productData, [name]: value })
  }


  const handleSubmitProduct = (e) => {
    e.preventDefault()
    setSaveProduct([...saveProduct, productData])
    setProductData({ product: "", price: "" })
  }

  const handleChangeList = (e) => {
    const studentsName = e.target.value
    setStudList(studentsName)
  }

  const handleSubmitList = (e) => {
    e.preventDefault()
    setSaveStudList([...saveStudList, studList])
    setStudList("")
  }
  const handleStudent = (e) => {

    const { name, value } = e.target
    setStudentData({ ...studentData, [name]: value })

  }

  const handleSubmitStudent = (e) => {
    e.preventDefault()
    setData([...data, studentData])
    setStudentData({ studentname: "", course: "" })
  }

  const handleChange = (e) => {

    const name = e.target.value
    setFormData(name)


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaveData([...saveData, formData]);
    setFormData("")
  }


  const handleName = (e) => {
    const name = e.target.value
    setName(name)

  }

  const handleSubmitName = (e) => {
    e.preventDefault()

    setSaveName(name)

    setName("")
  }

  return (
    <>

      <div>
        <h1>Task 1 - Name Submit</h1>
        <form onSubmit={handleSubmitName}>
          <input type="text" value={name} placeholder="Enter name" onChange={handleName} />
          <input type="submit" value="Submit" />
        </form>
        <p>{saveName}</p>
      </div>
      <div>
        <h1>Task 2 - Student Details</h1>
        <form onSubmit={handleSubmitStudent}>
          <input type="text" value={studentData.studentname} name="studentname" placeholder="Enter name" onChange={handleStudent} />
          <input type="text" value={studentData.course} name="course" placeholder="Enter course" onChange={handleStudent} />
          <input type="submit" value="Submit" />
        </form>
        {data.map((e, i) => (
          <div key={i}>
            <p>{e.studentname}</p>
            <p>{e.course}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Task 3 - Add Single Value into Array</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={formData} placeholder="Enter the Name" name="userName" onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <div>
          {saveData.map((data, i) => (
            <div key={i}>
              <p>Name: {data}</p>
            </div>

          ))}
        </div>
      </div>

      <div>
        <h1>Task 4 - Student List</h1>
        <form onSubmit={handleSubmitList}>
          <input type="text" value={studList} placeholder="Enter the Name" onChange={handleChangeList} />
          <input type="submit" value="Submit" />
        </form>

        {saveStudList.map((data, i) => (
          <div key={i}>
            <p>{data}</p>
          </div>

        ))}
      </div>



      <div>
        <h1>Task 5 - Product List</h1>
        <form onSubmit={handleSubmitProduct}>
          <input type="text" value={productData.product} placeholder="Enter the Product" name="product" onChange={handleProduct} />

          <input type="number" value={productData.price} placeholder="Enter the Price" name="price" onChange={handleProduct} />
          <input type="submit" value="Submit" />
        </form>

        {saveProduct.map((data, i) => (
          <div key={i}>
            <p>Product: {data.product}</p>
            <p>Price: {data.price}</p>
          </div>

        ))}

      </div>
    </>
  )
}

export default App