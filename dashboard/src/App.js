import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import GoogleMap from "./components/map/Map";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={GoogleMap} />
        <Route path="/add" component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
