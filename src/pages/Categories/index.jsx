import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../redux/categoriesSlice";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.items);
  const status = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, status]);
  return (
    <div className="flex flex-col px-84   py-8 bg-slate-500 items-center">
      <h4 className="text-4xl text-white font-bold my-4">Categories</h4>
      <div>
        {categories &&
          status !== "loading" &&
          categories.map((category, idx) => (
            <Link
              key={idx}
              to={`/category/${category}`}
              className="text-lg  text-stone-700 "
            >
              <div className="flex my-2 border-2 border-stone-700 items-center px-4 hover:scale-105 hover:text-black hover:border-black transition-all">
                {category}
              </div>
            </Link>
          ))}
        {status == "loading" && (
          <div className="text-white ">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
