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
  "pk_test_51N1Wc4KxLwtehdLRZmdFTwzcoyvooiheFIF55nhElTkZca6wjhJQpVzPaaLf38hRrMKsK1BpljORxoJTs1Wqh6Y000VtyuUoNd"
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
