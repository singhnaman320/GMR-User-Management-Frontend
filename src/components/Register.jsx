import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    id: "",
    joiningDate: "",
    companyName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      alert("User registered successfully");
      setError(""); // Reset error
    } catch (err) {
      setError(
        err.response ? err.response.data.message : "Registration failed"
      );
    }
  };

  return (
    <>
    <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="department"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Department"
          required
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="id"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="ID"
          required
        />
        </div>
        <div className="form-group">
        <input
          type="date"
          name="joiningDate"
          className="form-control mt-2"
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="companyName"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Company Name"
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
        <button type="submit" className="btn btn-primary mt-2">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </>
  );
};

export default Register;
