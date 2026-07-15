import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("Sangeetha")

  const [login, setLogin] = useState(false)

  const [mode, setMode] = useState("Light Mode")

  const [course , setCourse] =useState("Javascript")

  const handleClick = () => {
    setCount(count + 1);
    setName("React Developer")

  }

  const handleLogin = () => {
    setLogin(true)

  }

  const handleMode = () => {
    setMode("Dark Mode")
  }

  
  const handleCourse = () => {
    setCourse("React JS")
  }
  return (
    <>
      <div>
        <div className="m-4">
          <h1 className="text-lg">Task 1 & Task 2</h1>
          <p>{count}</p>
          <p className="text-lg text-blue-500">{name}</p>
          <button onClick={handleClick} className="bg-red-400 p-4 rounded ">Click</button>
        </div>
        <div className="m-4">
          <h1 className="text-lg ">Task 3</h1>
          {login ? <p className="text-lg text-green-600">Welcome User</p> : <p className="text-lg text-red-500">Please Login</p>}
          <button onClick={handleLogin} className="bg-orange-300 p-3 rounded">Login</button>
        </div>

        <div className="m-4">
          <h1 className="text-lg ">Task 4</h1>
          <p className="text-lg text-gray-600 mb-2s">{mode}</p>
          <button onClick={handleMode} className="bg-purple-300 p-2 rounded">Toggle Theme</button>
        </div>
          <div className="m-4">
          <h1 className="text-lg ">Task 5</h1>
          <p className="text-lg text-gray-600 mb-2s">{course}</p>
          <button onClick={handleCourse} className="bg-pink-500 text-white p-2 rounded">Update</button>
        </div>
      </div>

    </>
  )
}

export default App