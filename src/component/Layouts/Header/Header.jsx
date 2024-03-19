import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.auth);
  const showUser = (
    <>
      <Link to={"/mainpage"} className="cursor-pointer">
        <div className=" text-lg">
          <span className="text-yellow-600 font-semibold">Hello </span>
          <span className="text-yellow-600 font-semibold">{currentUser.tenNhaHang}</span>
        </div>
      </Link>
    </>
  );

  const showGuest = (
    <>
      <Link
        to={"/signup"}
        className="bg-yellow-700  text-white font-bold py-2 px-4 rounded-full"
      >
        Đăng ký
      </Link>
      <Link
        to={"/login"}
        className="bg-yellow-700  text-white font-bold py-2 px-4 rounded-full mr-4"
      >
        Đăng nhập
      </Link>
    </>
  );

  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1 className="text-4xl font-bold text-yellow-700">MAYME</h1>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-7  ">
              {isAuthenticated ? showUser : showGuest}
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
