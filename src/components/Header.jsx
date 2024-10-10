import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-gray-300 transition"
          >
            Indonesia
          </Link>
        </li>
        <li>
          <Link
            to="/programming"
            className="text-white text-lg font-semibold hover:text-gray-300 transition"
          >
            Programming
          </Link>
        </li>
        <li>
          <Link
            to="/saved"
            className="text-white text-lg font-semibold hover:text-gray-300 transition"
          >
            Saved
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className="text-white text-lg font-semibold hover:text-gray-300 transition"
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
