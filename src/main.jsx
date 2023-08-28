import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import Login from "./components/side/Login.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  </Router>
);
