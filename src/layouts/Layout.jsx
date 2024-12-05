import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav className="flex flex-row w-full h-20 space-x-20 bg-gray-500 justify-center items-center">
        <div>
          <Link to={"/"}>Home</Link>
        </div>

        <div>
          <Link to={"/about"}>About</Link>
        </div>

        <div>
          <Link to={"/login"}>Login</Link>
        </div>
      </nav>

      <div className="flex flex-col w-full h-screen justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
