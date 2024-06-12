import {  FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/feature/Auth/AuthSlice";
import { RootState } from "../../redux/store";
const NavBar = () => {
  const userData = useSelector((state:RootState) => state.user.userData);
  const dispatch = useDispatch();
  console.log(userData, "nav");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };
  return (
    <div className="NavBar">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img src="/Assets/Img/logo_bn.png" className="nav-logo" />
          </div>
        </div>
        <div className="navbar-center search-bar hidden lg:flex">
          <div className="grid grid-cols-6 items-center w-full">
            <div className="col-span-5 border border-black">
              <input placeholder="Search By Book" />
            </div>
            <div className="searchIcon flex justify-center items-center">
              <FaSearch color="white" />
            </div>
          </div>

          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <div className="flex items-center justify-between">
            {userData ? (
              <>
                <button onClick={handleLogout}>LogOut</button>{" "}
              </>
            ) : (
              <>
                <Link to={"/Login"}>Sign IN</Link>
                <Link to={"/Sign-up"}>Sign up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
