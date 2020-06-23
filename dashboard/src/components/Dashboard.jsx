import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Dashboard = () => {
  const history = useHistory();
  const [patientsList, setPatientsList] = useState([]);

  const onClick = (ev) => {
    ev.preventDefault();
    console.log("clicked add");
    history.push("/add");
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SRV_URL}/patients`)
      .then((value) => {
        const list = value.data.data;
        setPatientsList(list);
        console.log(list);
      })
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center my-2">Welcome</h1>
      <button
        onClick={(e) => {
          onClick(e);
        }}
        className="btn btn-outline-dark btn-lg my-2"
      >
        Add +
      </button>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {patientsList.map((value, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{value.name}</td>
                <td>{value.contact}</td>
                <td>@disconnected</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
