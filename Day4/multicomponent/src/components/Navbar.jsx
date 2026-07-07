import { Link } from "./Link";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400 p-4 flex justify-between">
        <Logo />
        <Link/>
      </div>
    </>
  );
};

export default Navbar;

const Logo = () => {
  return (
    <>
   
         <div className="bg-red-400 text-white p-2 rounded">Logo</div>
    
     
    </>
  );
};
