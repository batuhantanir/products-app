import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const Category = () => {
  const { category_id } = useParams();
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_API_BASE_ENDPOINT
        }/products/category/${category_id}`
      )
      .then((res) => res.data)
      .then((data) => setItems(data.products));
  }, [category_id]);

  console.log(items);

  return (
    <div>
      {items != null ? (
        <div className="flex flex-col  px-32 py-8 bg-slate-500 items-center">
          <h4 className="text-2xl text-white font-semibold">{category_id}</h4>
          {items.map((item) => (
            <div className="flex flex-col my-4 border-4 py-4 px-6 w-full bg-white rounded">
              <div className="flex justify-between mb-6 mx-4">
                <div>
                  <h2>
                    {item.brand} {item.title}
                  </h2>
                  <p>{item.category}</p>
                </div>
                <div>
                  <div>{item.price}$</div>
                  <div>stock: {item.stock}</div>
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-wrap flex-9 items-center">
                  {item.images.map((img) => (
                    <img className="w-64 m-1" src={img} alt="" />
                  ))}
                </div>
                <div className="flex-3 mx-4">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-24">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Category;
