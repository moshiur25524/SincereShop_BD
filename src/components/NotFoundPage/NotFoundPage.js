import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 mb-4">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="text-gray-600">
          You can go back to the{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
