import React from 'react';
import notFound from '../../assets/not-found.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-300 flex flex-col items-center">
        <img src={notFound} alt="Not Found" className="w-48 h-48 mb-4" />
        <h1 className="text-2xl font-bold text-gray-700 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-500 mb-4">
          The page you are looking for does not exist. Please check the URL or return home.
        </p>
        <Link
          onClick={() => window.location.href = '/'}
          className="px-4 py-2 bg-blue-500 text-white rounded-[8px] hover:bg-blue-600 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NotFound);