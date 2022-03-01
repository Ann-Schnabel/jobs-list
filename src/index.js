import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AddEdit, JobsList } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<JobsList />} />
        <Route path="edit" element={<AddEdit />} />
        <Route path="add" element={<AddEdit />} />
        <Route path="*" element="404: Not Found" />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
