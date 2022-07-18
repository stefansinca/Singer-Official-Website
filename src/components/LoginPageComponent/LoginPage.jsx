import React from "react";
import "./LoginPageStyle.css";

const LoginPage = () => {
  return (
    <div className="login">
      <h1 className="text-center">may have you a good hello again, artist!</h1>
      <form className="needs-validation">
        <div className="form-group was-validated">
          <input
            className="form-control"
            type="email"
            id="email"
            required
            placeholder="Username"
          >
        </input>
        </div>

        <div className="form-group was-validated">
          <input
            className="form-control"
            type="password"
            id="password"
            required
            placeholder="Password"
          ></input>
        </div>

        <input
          className="btn btn-success w-100"
          type="submit"
          value="SIGN IN"
        ></input>
      </form>
    </div>
  );
};

export default LoginPage;
