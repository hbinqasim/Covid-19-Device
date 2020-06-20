import React from "react";
import { Link, useHistory } from "react-router-dom";
import "axios";
import { useState } from "react";
import Axios from "axios";

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
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cordinates, setCordinates] = useState({ lat: 0, long: 0 });

  const onClick = (ev) => {
    ev.preventDefault();
    console.log({ name, cnic, age, address, phone, password, cordinates });
    Axios.post(`${process.env.REACT_APP_SRV_URL}/patients`, {
      name: name,
      CNIC: cnic,
      address: address,
      contact: phone,
      location: cordinates,
    })
      .then((value) => {
        console.log(value);
      })
      .catch((reason) => {
        console.log(reason);
      });

    // history.push("/dashboard");
  };

  const getLocation = (ev) => {
    ev.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords;
        setCordinates({ lat: coords.latitude, long: coords.longitude });
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  };
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
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                </div>
                {/* CNIC */}
                <div className="form-group">
                  <label>CNIC:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="00000-0000000-0"
                    value={cnic}
                    onChange={(event) => setCnic(event.target.value)}
                  ></input>
                </div>
                {/* Age */}
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="number"
                    className="form-control "
                    placeholder="00"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                  ></input>
                </div>
                {/* Address */}
                <div className="form-group">
                  <label>Address:</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Lahore, Pakistan"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  ></input>
                </div>
                {/* Location */}
                <div className="form-group">
                  <label>Quarantine Location: </label>
                  <button className="btn btn-secondary" onClick={getLocation}>
                    Current Location
                  </button>
                </div>
                {/* Phone Number */}
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control "
                    placeholder="+92-311-999-9999"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  ></input>
                </div>
                {/* Password */}
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                </div>
                <br></br>
                <button
                  className="btn btn-dark btn-lg btn-block"
                  onClick={onClick}
                >
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
