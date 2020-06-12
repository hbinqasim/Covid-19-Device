import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import "axios";
import Axios from "axios";

const Dashboard = () => {
  const history = useHistory();

  const onClick = (ev) => {
    ev.preventDefault();
    console.log("clicked add");
    history.push("/add");
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SRV_URL}/patients`)
      .then((value) => {
        console.log(value);
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@disconnected</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@normal</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@outOfBound</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
