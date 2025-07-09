import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
            <h1 className="text-7xl font-extrabold text-orange-500 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="px-6 py-2 bg-orange-400 text-white rounded shadow hover:bg-orange-500 transition">Go to Home</Link>
        </div>
    );
};

export default Error;