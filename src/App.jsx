import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/prod/:prod_id" Component={Detail} />
        <Route path="*" element={<div className="m-4 text-2xl font-bold ">404: not found page!!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
