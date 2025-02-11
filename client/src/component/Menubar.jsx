import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { logout } from "../ApiRequest/Api";

const Menubar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  let islogin = Cookies.get("token");
  console.log(!!islogin);

  let logoutfunction = async()=>{
 let result =  await logout()
 if (result) {
  window.location.reload()
 }
  }

  return (
    <div className="container mx-auto">
      <div className="navbar h-24">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
              onClick={toggleDropdown}
            >
              {dropdownOpen ? (
                // Cross Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-6 shadow"
              >
                <li className="m-1">
                  <NavLink to="/" onClick={closeDropdown}>
                    home
                  </NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/about" onClick={closeDropdown}>
                    about us
                  </NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/blog" onClick={closeDropdown}>
                    Blog
                  </NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/service" onClick={closeDropdown}>
                    Service
                  </NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/contac" onClick={closeDropdown}>
                    contact
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <a className="btn btn-ghost text-xl">tayyab</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {islogin ? (
              <>
                <li className="m-1">
                  <NavLink to="/">home</NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/about">about us</NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/service" onClick={closeDropdown}>
                    Service
                  </NavLink>
                </li>
                <li className="m-1">
                  <NavLink to="/contact">contact</NavLink>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        <div className="navbar-end">
          {islogin ? (
            <>
              <Link onClick={logoutfunction} className="btn">
                Logout
              </Link>
              <Link to="/dashboard" className="btn">
                dashboard
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
