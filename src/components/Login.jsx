import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      setToken(response.data.token);
      // console.log(response.data.token)
      alert("Login successful");
      navigate('/update-profile'); 
      setError(""); // Reset error
    } catch (err) {
      setError(err.response ? err.response.data.message : "Login failed");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="id"
            className="form-control"
            onChange={handleChange}
            placeholder="ID"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control mt-2"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
