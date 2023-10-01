import React, { useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
//components
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const next_page = useSelector((state) => state.products.page);
  const hasNextPage = useSelector((state) => state.products.hasNextPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts(next_page));
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <div className="flex flex-col items-center bg-slate-500">
      <h1 className="font-bold mt-4 text-2xl text-white">Products</h1>
      <div className="flex flex-wrap mx-10 my-4 justify-center">
        {products.map((product) => (
          <Link to={`/prod/${product.id}`} key={product.id}>
            <div className="w-80 h-96 m-4 border-4 rounded bg-white text-gray-600 hover:text-black hover:scale-105  transition-all">
              <img
                className=" h-[90%] w-full bg-cover "
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="text-center mt-1">{product.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="my-8">
        {status === "loading" && (
          <div className="text-white">
            <Loading />
          </div>
        )}
        {hasNextPage && status !== "loading" && (
          <button
            onClick={() => {
              dispatch(fetchProducts(next_page));
            }}
            className="my-4 bg-slate-300  border-2 px-2 py-1 rounded active:scale-90 hover:scale-105 "
          >
            Load more ({next_page})
          </button>
        )}
        {!hasNextPage && (
          <div className="bg-slate-300 rounded px-4 py-1 ">
            There is nothing to be shown.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
