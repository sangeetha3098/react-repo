import { useState } from "react"

const App = () => {
  const [obj, setObj] = useState([
    { name: "React", course: "Frontend" },
    { name: "Python", course: "Backend" },
    { name: "Nextjs", course: "Frontend" },
  ])

  const [data, setData] = useState({
    name: "Sangi",
    course: "React"
  })

  const [price, setPrice] = useState({
    name: "Mobile",
    price: 20000
  })

  const [hero, setHero] = useState(["Vijay", "Ajith", "Suriya"])

  const [number, setNumber] = useState([10, 20, 30, 40])

  const [fruit, setFruit] = useState(["Apple", "Orange"])

  const [remove, setRemove] = useState(["Apple", "Orange", "Mango"])

  const [student, setStudent] = useState([
    {
      id: 1,
      name: "Sudhan"
    },

    {
      id: 2,
      name: "Rahul"
    }
  ])

  const [course, setCourse] = useState([
    {
      id: 1,
      course: "React"
    },

    {
      id: 2,
      course: "Node"
    }
  ])

  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Laptop"
    }
  ])

  const [studentRemove, setStudentRemove] = useState([
    {
      id: 1,
      name: "Sudhan"
    },

    {
      id: 2,
      name: "Rahul"
    },

    {
      id: 3,
      name: "Karthik"
    }
  ])

  const handleStudRemove = () => {
    setStudentRemove(studentRemove.filter((stud) => stud.name !== "Rahul"))
  }

  const handleProduct = () => {
    const newProduct = [...product]
    newProduct[1] = { ...newProduct[1], id: 2, name: "Mobile" }

    setProduct(newProduct)
  }

  const handleCourses = () => {
    const newCourse = [...course]
    newCourse[1] = { ...newCourse[1], course: "MERN" }
    setCourse(newCourse)
  }

  const handleStud = () => {
    const newStudent = [...student]
    newStudent[0] = { ...newStudent[0], name: "Sangeetha" }
    setStudent(newStudent)
  }

  const handleRemoveFruit = () => {

    setRemove(remove.filter((fruit) => fruit !== "Orange"))
  }


  const handleFruit = () => {
    const newFruit = [...fruit]
    setFruit([...newFruit, "Mango"])
  }

  const handleNumber = () => {
    const newNum = [...number]
    newNum[2] = 100
    setNumber(newNum)
  }


  const handleHero = () => {
    const newHero = [...hero]
    newHero[1] = "SK"
    setHero(newHero)
  }

  const handlePrice = () => {
    const newPrice = { ...price }
    setPrice({ ...newPrice, price: 25000 })
  }

  const handleCourse = () => {
    const copy = { ...data }
    setData({ ...copy, course: "MERN" })
  }
  const handleClick = () => {
    const data = obj.map((e, i) => i === 0 ? { ...e, course: "Full Stack" } : e)
    setObj(data)
  }
  return (
    <>
      <div className="min-h-screen bg-slate-100 p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-slate-800">
          React State Tasks
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {/* Task */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task</h2>

            {obj.map((e, i) => (
              <div key={i} className="mb-2 rounded-md bg-slate-100 p-3">
                <p><span className="font-semibold">Name:</span> {e.name}</p>
                <p><span className="font-semibold">Course:</span> {e.course}</p>
              </div>
            ))}

            <button
              onClick={handleClick}
              className="mt-4 w-full rounded-lg bg-blue-500 py-2 font-semibold text-white hover:bg-blue-600"
            >
              Update
            </button>
          </div>

          {/* Task 1 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 1</h2>

            <p><span className="font-semibold">Name:</span> {data.name}</p>
            <p><span className="font-semibold">Course:</span> {data.course}</p>

            <button
              onClick={handleCourse}
              className="mt-4 w-full rounded-lg bg-green-500 py-2 font-semibold text-white hover:bg-green-600"
            >
              Update
            </button>
          </div>

          {/* Task 2 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 2</h2>

            <p><span className="font-semibold">Product:</span> {price.name}</p>
            <p><span className="font-semibold">Price:</span> ₹{price.price}</p>

            <button
              onClick={handlePrice}
              className="mt-4 w-full rounded-lg bg-red-500 py-2 font-semibold text-white hover:bg-red-600"
            >
              Update
            </button>
          </div>

          {/* Task 3 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 3</h2>

            <p>{hero.join(" • ")}</p>

            <button
              onClick={handleHero}
              className="mt-4 w-full rounded-lg bg-purple-500 py-2 font-semibold text-white hover:bg-purple-600"
            >
              Update
            </button>
          </div>

          {/* Task 4 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 4</h2>

            <div className="flex gap-3 flex-wrap">
              {number.map((no, i) => (
                <span
                  key={i}
                  className="rounded bg-slate-200 px-3 py-1"
                >
                  {no}
                </span>
              ))}
            </div>

            <button
              onClick={handleNumber}
              className="mt-4 w-full rounded-lg bg-indigo-500 py-2 font-semibold text-white hover:bg-indigo-600"
            >
              Update
            </button>
          </div>

          {/* Task 5 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 5</h2>

            <p>{fruit.join(" • ")}</p>

            <button
              onClick={handleFruit}
              className="mt-4 w-full rounded-lg bg-orange-500 py-2 font-semibold text-white hover:bg-orange-600"
            >
              Update
            </button>
          </div>

          {/* Task 6 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 6</h2>

            <p>{remove.join(" • ")}</p>

            <button
              onClick={handleRemoveFruit}
              className="mt-4 w-full rounded-lg bg-pink-500 py-2 font-semibold text-white hover:bg-pink-600"
            >
              Update
            </button>
          </div>

          {/* Task 7 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 7</h2>

            {student.map((stud) => (
              <div
                key={stud.id}
                className="mb-2 rounded-md bg-slate-100 p-3"
              >
                <p><span className="font-semibold">ID:</span> {stud.id}</p>
                <p><span className="font-semibold">Name:</span> {stud.name}</p>
              </div>
            ))}

            <button
              onClick={handleStud}
              className="mt-4 w-full rounded-lg bg-cyan-500 py-2 font-semibold text-white hover:bg-cyan-600"
            >
              Update
            </button>
          </div>

          {/* Task 8 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 8</h2>

            {course.map((e) => (
              <div
                key={e.id}
                className="mb-2 rounded-md bg-slate-100 p-3"
              >
                <p><span className="font-semibold">ID:</span> {e.id}</p>
                <p><span className="font-semibold">Course:</span> {e.course}</p>
              </div>
            ))}

            <button
              onClick={handleCourses}
              className="mt-4 w-full rounded-lg bg-teal-500 py-2 font-semibold text-white hover:bg-teal-600"
            >
              Update
            </button>
          </div>

          {/* Task 9 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 9</h2>

            {product.map((prod) => (
              <div
                key={prod.id}
                className="mb-2 rounded-md bg-slate-100 p-3"
              >
                <p><span className="font-semibold">ID:</span> {prod.id}</p>
                <p><span className="font-semibold">Product:</span> {prod.name}</p>
              </div>
            ))}

            <button
              onClick={handleProduct}
              className="mt-4 w-full rounded-lg bg-yellow-500 py-2 font-semibold text-white hover:bg-yellow-600"
            >
              Update
            </button>
          </div>

          {/* Task 10 */}
          <div className="rounded-xl bg-white p-5 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-blue-600">Task 10</h2>

            {studentRemove.map((e) => (
              <div
                key={e.id}
                className="mb-2 rounded-md bg-slate-100 p-3"
              >
                <p><span className="font-semibold">ID:</span> {e.id}</p>
                <p><span className="font-semibold">Name:</span> {e.name}</p>
              </div>
            ))}

            <button
              onClick={handleStudRemove}
              className="mt-4 w-full rounded-lg bg-rose-500 py-2 font-semibold text-white hover:bg-rose-600"
            >
              Remove
            </button>
          </div>

        </div>
      </div>

    </>
  )
}

export default App