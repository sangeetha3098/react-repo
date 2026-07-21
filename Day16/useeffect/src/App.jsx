import { useEffect, useState } from "react"

const App = () => {

  const [user, setUser] = useState([])

  const [count, setCount] = useState(0)

  const [name, setName] = useState("")
  const [number, setNumber] = useState(0)

  const [theme, setTheme] = useState(true)

  const userData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await data.json()
    setUser(response)
    console.log("List", response);

  }

  useEffect(() => {
    userData()
  }, [])


  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("Latest Count:", count);
  }, [count])


  useEffect(() => {

    if (name) {
      document.title = `Welcome ${name}`
    } else {
      document.title = `Welcome`
    }
  }, [name])

  useEffect(() => {

    const timer = setInterval(() => {
      setNumber((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const ChangeTheme = () => {
    setTheme((prev) => !prev)
  }

  useEffect(() => {

  }, [theme])

  return (
    <>
      <div className="m-4">
        <div className="p-4">
          <h1 className="text-3xl font-bold">Task 1 - Counter with useEffect</h1>
          <p>{count}</p>
          <button className="bg-blue-400 p-2 rounded" onClick={increment}>Increase</button>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold">Task 2 - Page Title Updater</h1>
          <div >
            <input type="text" className="border-2" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold">Task 3 - Digital Timer</h1>
          <p>{number}</p>

        </div>
        <div className="p-4">
          <div>
            <h1 className="text-3xl font-bold">Task 4 - Fetch API</h1>
          </div>

          {user.map((user, i) => (
            <div key={user.id}>
              <p>Name :{user.name}</p>
              <p>Email : {user.email}</p>
            </div>
          ))}
        </div>
        <div className={`p-4 ${theme ? "bg-white" : "bg-black "}`}>
          <h1 className={`text-3xl font-bold ${theme ? "text-black" : "text-white "}`}>Task 5 - Dark / Light Mode</h1>
          <button onClick={ChangeTheme} className="bg-blue-300 p-2 rounded">{theme ? "Light" : "Dark"}</button>
        </div>
      </div>
    </>
  )
}

export default App