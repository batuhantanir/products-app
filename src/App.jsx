import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <nav className="flex mx-24 justify-between">
        <Link to="/" className="mx-2 my-4">
          Brand
        </Link>
        <ul className="flex ">
          <li className="mx-2 my-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 my-4">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/prod/:prod_id" Component={Detail} />
        <Route path="/categories" Component={Categories} />
        <Route path="/category/:category_id" Component={Category} />
        <Route
          path="*"
          element={
            <div className="m-4 text-2xl font-bold ">404: not found page!!</div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
