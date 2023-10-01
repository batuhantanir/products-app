import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";
import Loading from "../../components/Loading";

const Detail = () => {
  const { prod_id } = useParams();

  const [prod, setProd] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(prod);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_ENDPOINT}/products/${prod_id}`)
      .then((res) => res.data)
      .then((data) => setProd(data))
      .finally(() => setLoading(false));
  }, [prod_id]);
  return prod != null && !loading ? (
    <div className="flex flex-col border-4 mx-64 my-16 p-4 rounded">
      <div className="flex justify-between mb-6 mx-4">
        <div>
          <h2>
            {prod.brand} {prod.title}
          </h2>
          <p>{prod.category}</p>
        </div>
        <div>
          <div>{prod.price}$</div>
          <div>stock: {prod.stock}</div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-wrap flex-9 border-2 rounded justify-center items-center">
          {prod.images.map((img) => (
            <img className="w-64 m-1" src={img} alt="" />
          ))}
        </div>
        <div className="flex-3 mx-4">{prod.description}</div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Detail;
