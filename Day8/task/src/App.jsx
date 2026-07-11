const App = () => {
  const course = "React JS";
  const price = 50000;

  const discount = 5000;
  const isLogin = true;

  const profileImage = null;
  const email = undefined;

  const getCompanyName = () => {
    return "Google";
  };

  const heroes = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"];

  const object = { name: "Sangeetha", course: "Frontedn", experience: 4 };

  const students = [
    { id: 100, name: "Ramesh", course: "React" },
    { id: 101, name: "Mugesh", course: "Node" },
    { id: 102, name: "Reka", course: "Fullstack" },
  ];

  const compName = "Wipro";

  const totalEmp = 2000;

  const isHiring = true;

  const CEO = { name: "Hemesh", experience: 20 };

  const departments = ["Development", "Testing", "Devops"];

  const employees = [
    { id: 1, name: "Harsha", age: 30 },
    { id: 1, name: "Neha", age: 40 },
    { id: 1, name: "Rinku", age: 27 },
  ];

  const location = "Chennai";
  const getLocation = () => {
    return location;
  };

  getLocation();

  return (
    <>
      <div>
        <h1 className="text-red-600 p-2">{course}</h1>
      </div>
      <div className="p-2 bg-amber-200">
        <h2>The amount is {price}</h2>
        <h2>The discount is {discount}</h2>
      </div>
      <div className="bg-green-200">
        {isLogin ? (
          <p className="text-green-700 p-2">Welcome User</p>
        ) : (
          <p className="text-red-600">Please Login</p>
        )}
      </div>
      <div className="bg-yellow-200 p-2">
        {profileImage ? <p>{image}</p> : <p>No Image Found</p>}
      </div>
      <div>{email ? <p>{email}</p> : <p>Email Not Available</p>}</div>
      <div className="bg-blue-200 w-20 h-20 p-2 mt-4 text-center ">
        <h1>{getCompanyName()}</h1>
      </div>
      <div className="bg-orange-300 p-4 gap-2">
        <ol>
          {heroes.map((hero, i) => (
            <li key={i}>{hero}</li>
          ))}
        </ol>
      </div>
      <div className="bg-red-400 p-2 w-30 h-20 text-white m-2 ">
        <h1>{object.name}</h1>
        <p>{object.course}</p>
        <p>{object.experience}</p>
      </div>
      <div className="flex  gap-4 p-4">
        {students.map((stud, i) => (
          <div key={i} className="bg-yellow-200 p-4 w-56 rounded-lg shadow-md">
            <p>{stud.id}</p>
            <p>{stud.name}</p>
            <p>{stud.course}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{compName}</h1>

        <p>
          <strong>Total Employees:</strong> {totalEmp}
        </p>

        <p>
          <strong>Location:</strong> {location}
        </p>

        <p className="mt-2">
          {isHiring ? (
            <span className="text-green-600 font-semibold">
              Actively Hiring
            </span>
          ) : (
            <span className="text-red-600 font-semibold">
              Not Hiring at the moment
            </span>
          )}
        </p>

        <div className="mt-4 p-3 bg-white rounded border">
          <h2 className="text-xl font-semibold mb-2">CEO Details</h2>
          <p>
            <strong>Name:</strong> {CEO.name}
          </p>
          <p>
            <strong>Experience:</strong> {CEO.experience}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <ol className="list-decimal list-inside">
            {departments.map((dep, i) => (
              <li key={i}>{dep}</li>
            ))}
          </ol>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Employees</h2>

          <div className="flex flex-wrap gap-4">
            {employees.map((empl) => (
              <div
                key={empl.id}
                className="bg-blue-500 text-white p-4 rounded w-40 text-center"
              >
                <p>
                  <strong>ID:</strong> {empl.id}
                </p>
                <p>{empl.name}</p>
                <p>Age: {empl.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
