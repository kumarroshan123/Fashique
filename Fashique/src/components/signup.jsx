import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextName } from "./Contextapi";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState([]);
  
  const navigate = useNavigate();

  let handleSubmit = () => {
    setUsernameError("");
    setPasswordError([]);
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      setUsernameError("Username already exists. Please try another username.");
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError((prev) => [
        ...prev,
        "Password must be at least 8 characters long and include one letter and one number.",
      ]);
      return;
    }
    if (password.includes(username)) {
      setPasswordError((prev) => [
        ...prev,
        "Password should not include the username.",
      ]);
      return;
    }
    users[username] = {
      phoneNumber: phone,
      password: password,
      bag: [],
      wishlist: [],
    };
    localStorage.setItem("users", JSON.stringify(users));
    setuserdetail({username,phone});
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      <div className="signup">
        <div className="form">
          <h1>Signup</h1>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}

          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError.length > 0 &&
            passwordError.map((ele, index) => (
              <p key={index} style={{ color: "red" }}>
                {ele}
              </p>
            ))}

          <p>
            By continuing, I agree to the
            <a href="http://">Terms of Use & Privacy Policy</a>
          </p>
          <button onClick={handleSubmit}>CONTINUE</button>
          <p>
            Already have an account?
            <Link to="/login">
              <b>login</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
