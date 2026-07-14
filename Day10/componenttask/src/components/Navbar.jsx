import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="bg-red-300 p-4 flex gap-10 justify-between items-center">
                <h1>Logo</h1>
                <div className="flex gap-3">
                    <Link to="/">Home</Link>
                    <Link to="/banner">Banner</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar