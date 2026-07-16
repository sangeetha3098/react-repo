import { useState } from "react"

const App = () => {

  const [theme, setTheme] = useState(true)

  const [number, setNumber] = useState([3, 5, 60, 34, 78, 45])

  const [name, setName] = useState({ name: "Sangeetha" })

  const [heroes, setHeroes] = useState(["Vijay", "Ajith", "Suriya"])

  const [fruit, setFruit] = useState(["Apple", "Orange", "Mango"])

  const [obj, setObj] = useState({

    name: "Sangeetha",

    course: "JS"

  })

  const [company, setCompany] = useState({

    company: "Google",

    city: "Chennai"

  })

  const [arrobj, setArrObj] = useState([
    {
      id: 1,
      name: "Sangi"
    },

    {
      id: 2,
      name: "Rahul"
    }
  ])

  const handleArrObj = () => {

    const newArrObj = [...arrobj]
    newArrObj[1] = {
      ...newArrObj[1],
      name: "SK",
    };
    setArrObj(newArrObj)
  }


  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Mobile"
    },

    {
      id: 2,
      name: "Laptop"
    }
  ])


  const handleProduct = () => {
    const copyProd = [...product]
    copyProd[1] = { ...copyProd[1], name: "Tablet" }
    setProduct(copyProd)
  }
  const handleCompany = () => {

    const newCom = { ...company }
    setCompany({ newCom, company: "Microsoft", city: "Chennai" })
  }
  const handleObject = () => {

    const newCopy = { ...obj }
    setObj({ newCopy, name: "Sangeetha", course: "React" })
  }

  const handleHero = () => {
    const updatedHeroes = [...heroes];
    updatedHeroes[1] = "SK";
    setHeroes(updatedHeroes);
  }

  const handleFruit = () => {
    const updatedFruits = [...fruit];
    updatedFruits[1] = "Banana";
    setFruit(updatedFruits);
  }

  const handleArray = () => {
    const newArray = [...number];
    newArray[2] = 99764;
    setNumber(newArray);
  }

  const handleObj = () => {

    setName({ ...name, name: "Frontend Developer" });
  }

  const handleClick = () => {
    setTheme(false)
  }
  return (
    <>
      <div className={theme ? "bg-white h-full" : "bg-black h-96"}>
        <button onClick={handleClick} className="bg-amber-200 p-2 rounded m-2">{theme ? "Light Theme" : "Dark Theme"}</button>
      </div>
      {theme &&
        <div className="bg-red-300 m-2 ">
          <p>This is an event handling example</p>
        </div>
      }
      <div className="p-2">
        {number.map((num, i) => (
          <div key={i}>
            <p>{num}</p>
          </div>
        ))}
        <button onClick={handleArray} className="bg-red-500 p-2 m-2">Click</button>
      </div>
      <div className="p-2">
        <p>{name.name}</p>
        <button onClick={handleObj} className="bg-red-500 p-2 m-2">Obj Click</button>
      </div>
      <div className="m-2">
        <h1 className="text-3xl font-bold">Task</h1>
        <div>
          <p>{heroes}</p>
          <button onClick={handleHero} className="bg-blue-300 p-2 rounded">Change Hero</button>
        </div>
        <div className="m-4">
          {fruit.map((e, i) => (
            <div key={i}>
              <p>{e}</p>
            </div>
          ))}
          <button onClick={handleFruit} className="bg-blue-300 p-2 rounded">Update</button>
        </div>

        <div className="m-4">
          <p>{obj.name}</p>
          <p>{obj.course}</p>
          <button onClick={handleObject} className="bg-blue-300 p-2 rounded">Update</button>
        </div>
        <div className="m-4">
          <p>{company.company}</p>
          <p>{company.city}</p>
          <button onClick={handleCompany} className="bg-blue-300 p-2 rounded">Update</button>
        </div>
        <div className="m-4">
          {arrobj.map((e, i) => (
            <div key={i}>
              <p>{e.id}</p>
              <p>{e.name}</p>
            </div>
          ))}
          <button onClick={handleArrObj} className="bg-blue-300 p-2 rounded">Update</button>
        </div>
        <div className="m-4">
          {product.map((e, i) => (
            <div key={i}>
              <p>{e.id}</p>
              <p>{e.name}</p>
            </div>
          ))}
          <button onClick={handleProduct} className="bg-blue-300 p-2 rounded">Edit</button>
        </div>
      </div>

    </>
  )
}

export default App