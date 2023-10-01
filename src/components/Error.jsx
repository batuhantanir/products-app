import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="text-3xl font-semibold bg-red-400 border-2 border-slate-300 px-8 py-2 rounded-md text-white">
        Error: {error} !!!
      </span>
    </div>
  );
};

export default Error;
