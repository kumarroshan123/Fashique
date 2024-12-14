import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ContextName } from "./Contextapi";

const Login = () => {
  const [usernamelogin, setUsernamelogin] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const {setisAuthenticated,setuserdetail}=useContext(ContextName);
  const [error, setError] = useState("");
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const navigate=useNavigate()

  const handleSubmit = () => {
    if (!users[usernamelogin]) {
      setError("Invalid username or password.");
      return;
    }
    if (users[usernamelogin].password !== userpassword) {
      setError("Invalid username or password.");
      return;
    }
    setError("");
    alert("Login successful!");
    setuserdetail({username:usernamelogin,phone:users[usernamelogin].phoneNumber})
    setisAuthenticated(true);
    navigate("/")
  };

  return (
    <>
      <div className="login">
        <div className="form">
          <h1>LogIn</h1>

          <label htmlFor="login-username">Username</label>
          <input
            type="text"
            id="login-username"
            placeholder="Enter Username"
            value={usernamelogin}
            onChange={(e) => setUsernamelogin(e.target.value)}
          />
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            placeholder="Enter Password"
            value={userpassword}
            onChange={(e) => setUserpassword(e.target.value)}
          />
          <p>
            By continuing, I agree to the{" "}
            <a href="http://">Terms of Use & Privacy Policy</a>
          </p>
          <button onClick={handleSubmit}>CONTINUE</button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              <b>Signup</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
