import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="bg-red-300 p-4 flex gap-10 justify-between items-center">
                <h1>Logo</h1>
                <div className="flex gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/student">Student</Link>
                    <Link to="/employee">Employee</Link>
                    <Link to="/product">Product</Link>
                     <Link to="/movie">Movie</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar