import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const onClick = (ev) => {
    ev.preventDefault();
    console.log("clicked login");
    history.push("/dashboard");
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center my-5"> Login</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control "
                    placeholder="name@example.com"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Password"
                  ></input>
                </div>
                <br></br>
                <button
                  onClick={(e) => {
                    onClick(e);
                  }}
                  className="btn btn-dark btn-lg btn-block"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
