import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      
        <div className="bg-pink-300 flex gap-4 p-8 justify-center items-center">
          <Link className="bg-yellow-200 p-2 rounded" to="/string">String Rendering</Link>
          <Link className="bg-yellow-200 p-2 rounded" to="/number">Number Rendering</Link>
          <Link className="bg-yellow-200 p-2 rounded" to="/boolean">Boolean Rendering</Link>
          <Link className="bg-yellow-200 p-2 rounded" to="/nullundefined">Null & Undefined Rendering</Link>
        </div>
     
    </>
  );
};

export default Home;
