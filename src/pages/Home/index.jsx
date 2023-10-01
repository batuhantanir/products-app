import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-wrap mx-10 my-4 justify-center">
        {products.map((product) => (
          <img className="w-80 m-4 border-4" src={product.thumbnail} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Home;
