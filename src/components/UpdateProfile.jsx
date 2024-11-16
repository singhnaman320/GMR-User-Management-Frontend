import { useState } from "react";
import axios from "axios";

const UpdateProfile = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    joiningDate: "",
    companyName: "",
    id: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/update/${formData.id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profile updated successfully");
      setError(""); // Reset error
    } catch (err) {
      setError(err.response ? err.response.data.message : "Update failed");
    }
  };

  return (
    <>
    <h2>User Profile Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input
          type="text"
          name="id"
          className="form-control"
          onChange={handleChange}
          placeholder="User ID"
          required
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Name"
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="department"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Department"
        />
        </div>
        <div className="form-group">
        <input
          type="date"
          name="joiningDate"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Joining Date"
        />
        </div>
        <div className="form-group">
        <input
          type="text"
          name="companyName"
          className="form-control mt-2"
          onChange={handleChange}
          placeholder="Company Name"
        />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Update</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default UpdateProfile;
