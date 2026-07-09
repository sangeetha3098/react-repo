import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-500 p-6 text-white flex justify-between">
        <div>
          <h2>Logo</h2>
        </div>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/task">Task</Link>
          <Link to="/project">Project</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
