import React from "react";
import { Link, Outlet } from "react-router-dom";
// import "./App.css";
// import "./index.css";

const App = () => {
  return (
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Indonesia</Link>
    //       </li>
    //       <li>
    //         <Link to="/programming">Programming</Link>
    //       </li>
    //       <li>
    //         <Link to="/search">Search</Link>
    //       </li>
    //       <li>
    //         <Link to="/saved">Saved</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Outlet />
    // </div>
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 p-4 shadow">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Indonesia
            </Link>
          </li>
          <li>
            <Link to="/programming" className="text-white hover:text-gray-200">
              Programming
            </Link>
          </li>
          <li>
            <Link to="/search" className="text-white hover:text-gray-200">
              Search
            </Link>
          </li>
          <li>
            <Link to="/saved" className="text-white hover:text-gray-200">
              Saved
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
