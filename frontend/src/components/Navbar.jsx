import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    function logout () {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav 
        style ={{
            display:"flex", 
            gap: 12, 
            padding: 12, 
            borderBottom: "1px solid #ccc" 
            }}
            >
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>

            <div style= {{ marginLeft: "auto" }}>
                {!token ? (
                    <>
                    <Link to ="/login" style={{ marginRight: 12}}>
                    Login
                    </Link>
                    <Link to ="/signup">
                    Sign Up
                    </Link>
                    </>
                ) : (
                    <button onClick={logout}>Logout</button>
                )}
            </div>
        </nav>
    );
}
