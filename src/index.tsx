import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobSearch from "view/JobSearch";
import JobProfile from "view/JobProfile";
import "index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/:id" element={<JobProfile />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
