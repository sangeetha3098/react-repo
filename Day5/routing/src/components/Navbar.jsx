import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-20 p-4 bg-red-300 text-white">
          <h1>Logo</h1>
          <div className="flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/help">Help</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
