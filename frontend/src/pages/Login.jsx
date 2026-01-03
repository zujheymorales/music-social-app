import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        // backend login API call here
        localStorage.setItem("Token", "demo-token");
        navigate('/');
    }

    return (
        <div style = {{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <label>Email</label>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{width: "100%", marginBottom:12 }}
                />

                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{width: "100%", marginBottom:12 }}
                />

                <button style={{width: "100%" }} type="submit">
                Sign in
                </button>
                </form>

                <p style = {{ marginTop: 20 }}>
                    No account? <Link to ="/signup">Sign up</Link>
                </p>    
        </div>
      );  
    }
