import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
//import Login from "./components/side/Login.jsx";
import Terms from "./components/side/Terms.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51NjrOvEhqZA73E9JPU73PsgbA0noZDf7fzOTxNkapi8qpniKzqXkRfBhi1HaPxbPkj53TKUTlqx9bqRXHviCQfcL00au6EqLG5"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  </Elements>
);
