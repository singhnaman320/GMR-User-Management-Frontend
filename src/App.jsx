import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UpdateProfile from "./components/UpdateProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            path="/update-profile"
            element={
              token ? (
                <UpdateProfile token={token} />
              ) : (
                <p>Please log in first.</p>
              )
            }
          />
          <Route
            path="/"
            element={
              <h3 className="text-center">
                Welcome! Please go to <a href="/register">Register</a> or{" "}
                <a href="/login">Login</a>.
              </h3>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
