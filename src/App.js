import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginPageComponent/LoginForm";

function App() {
  const adminUser = {
    email: process.env.REACT_APP_USER_EMAIL,
    password: process.env.REACT_APP_USER_PASSWORD
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Welcome!");
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Details not match!");
      setError("Details not match!")
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
    setError('')
  };

  return (
    <div>
      {user.email !== "" ? (
        <div className="logout-div">
          <button className='logout-btn' onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
