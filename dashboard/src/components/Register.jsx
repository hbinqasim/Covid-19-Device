import React from "react";
import { Link, useHistory } from "react-router-dom";

// Name:
// CNIC:
// Age:
// Address:
// Contact: 
// Registered location:
// Device: {id of device, alloted by the hospital admin}
// Status: {disconnected, normal, outOfBound }
// Guardian Name:
// Emergency contact: 
// Email:

const Register = () => {
  const history = useHistory();

  const onClick = (ev) => {
    ev.preventDefault();
    console.log("clicked register");
    history.push("/dashboard");
  }

  return (
    <div className="container my-5">
      <h1 className="display-4 text-center my-5"> Patient Registration Form</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <form>
                {/* Name */}
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="John Doe"
                  ></input>
                </div>
                {/* CNIC */}
                <div className="form-group">
                  <label>CNIC:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="00000-0000000-0"
                  ></input>
                </div>
                {/* CNIC */}
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="number"
                    className="form-control "
                    placeholder="00"
                  ></input>
                </div>
                {/* Address */}
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Lahore, Pakistan"
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
                <button className="btn btn-dark btn-lg btn-block">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
