import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useName } from "../utils/localStorage";
const Header = () => {
  const handlerRemove = () => {
    localStorage.removeItem("user");
  };
  return (
    <div>
      <header className="bg-[#cecccc]  flex  top-0 left-0 right-0 ">
        <div className="logo mx-5 mt-[30px]  ">
          <NavLink to="/">
            {" "}
            <img
              src="https://res.cloudinary.com/assignment22/image/upload/v1648635862/Ass-reactjs/logo_gmfskp.svg"
              alt=""
            />
          </NavLink>
        </div>

        <nav className=" mt-[20px]  mx-auto text-center   lg:block hidden text-[18px] font-normal">
          <ul>
            <li className="inline-block">
              <NavLink
                to="/"
                className="inline-block py-[10px] px-[20px] text-slate-600  hover:font-bold focus:text-[#235e12] hover:text-[#2a4a84] ease-in-out duration-200 no-underline"
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="/detail"
                className="inline-block py-[10px] px-[20px] text-slate-600 hover:font-bold focus:text-[#235e12] hover:text-[#2a4a84]  ease-in-out duration-200 no-underline"
              >
                Sản Phẩm
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="#"
                className="inline-block py-[10px] px-[20px] text-slate-600  hover:font-bold focus:text-[#235e12] hover:text-[#2a4a84]  ease-in-out duration-200 no-underline"
              >
                Tin tức
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="#"
                className="inline-block py-[10px] px-[20px] text-slate-600  hover:font-bold focus:text-[#235e12] hover:text-[#2a4a84]  ease-in-out duration-200 no-underline"
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="search xl:pt-[21px] xl:relative xl:block lg:pt-[7px] lg:relative lg:block hidden ml-[20px] ">
          <input
            type="text"
            placeholder="Tìm kiếm ở đây..."
            className="border-[1px] border-gray-400 indent-[5px] p-2 pr-10 w-[300px] rounded-[20px] focus:outline-none focus:border-[#2a4a84] hover:border-[#2a4a84] ease-in-out duration-300"
          />
          <button className="absolute text-gray-500 p-2 pr-[20px] top-[24px] right-3  hover:text-black ease-in-out duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="icon ml-[0px] flex p-7">
          <div className="user ">  
        
            <Link to="/signin" className="text-[#122031]  hover:text-[#2a4a84]  ease-in-out duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <a href=""><p onClick={handlerRemove}>Đăng xuất</p></a>
              <h1>xin chào: {useName()}</h1>
          </div>

          {/* <div className="user">
            <div className="login text-white hover:text-[#ffbe33] group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <div className="absolute top-[70px] bg-white shadow-xl z-50 p-3 rounded-lg visible ease-linear duration-300 w-60 right-[-96px] group-hover:visible before:absolute before:-top-2 before:left-10 before:w-5 before:h-5 before:bg-white before:rounded before:rotate-45 before:z-10 before:shadow-xl">
                {localStorage.getItem("user") ? (
                  <div>
                    <div className="flex items-center pb-3 w-full">
                      <div className="ml-4">
                        <div className="text-sm text-gray-500">Xin chào !</div>
                        <div>
                          <span className="user-name text-sm font-medium text-gray-900">
                            {useName()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li className="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white">
                        <a className="inline-block p-2" href="/admin">
                          Trang quản trị
                        </a>
                      </li>
                      <li className="logout rounded-lg text-black hover:bg-[#ffbe33] hover:text-white cursor-pointer">
                        <span
                          className="inline-block p-2"
                          onClick={handlerRemove}
                        >
                          Đăng xuất
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <ul>
                    <li className="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white">
                      <a className="inline-block p-2" href="/signin">
                        Đăng nhập
                      </a>
                    </li>
                    <li className="rounded-lg text-black hover:bg-[#ffbe33] hover:text-white">
                      <a className="inline-block p-2" href="/signup">
                        Đăng ký
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div> */}

          <div className="cart">
            <Link
              to="/cart"
              className="text-[#122031]  hover:text-[#2a4a84]  ease-in-out duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
          </div>
          {/* <button onClick={handlerRemove} className="btn btn-primary">Đăng Xuất</button>
          <h4>Xin Chào: {useName()}</h4>  */}
        </div>
      </header>
    </div>
  );
};

export default Header;
