import React from "react";
import { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({email: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    <div className="login">
      <h1 className="text-center">may have you a good hello again, artist!</h1>
      <form className="needs-validation" onSubmit={submitHandler}>
        <div className="form-group was-validated">
          <input
            className="form-control"
            type="email"
            name="email"
            required
            placeholder="Username"
            onChange={e => setDetails({...details, email: e.target.value})}
            value={details.email}
          >
          </input>
        </div>

        <div className="form-group was-validated">
          <input
            className="form-control"
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={e => setDetails({...details, password: e.target.value})} //take password from input and set to details
            value={details.password} //set the value of the password input to the actually input of the use
          >
          </input>
        </div>

        {(error != '' ? (<div className="error">{error}</div>) : '')}

        <input
          className="btn btn-success w-100"
          type="submit"
          value="SIGN IN"
        ></input>
      </form>
    </div>
  );
};

export default LoginForm;
