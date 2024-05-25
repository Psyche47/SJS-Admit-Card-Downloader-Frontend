import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen font-inter">
      <h1 className="text-2xl text-indigo-600 font-extrabold">404 Error</h1>
      <h1 className="text-2xl md:text-6xl font-semibold">
        This page does not exist.
      </h1>
      <h1 className="text-center text-sm md:text-xl mt-3">
        Please check the URL in the address bar and try again.
      </h1>
      <Link to="/">
        <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
