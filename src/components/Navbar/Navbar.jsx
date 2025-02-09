import { NavLink } from "react-router-dom";

const Navbar = () => {
  // / HEADER EFECT BY SCROLL
  window.onscroll = function () {
    navscroll();
  };

  function navscroll() {
    let menu_bar = document.getElementById("menu_bar");
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      menu_bar.classList.add("active_nav");
    } else {
      menu_bar.classList.remove("active_nav");
    }
  }

  return (
    <>
      <div
        id="menu_bar"
        className="navbar absolute   w-full z-50 p-2  flex justify-between items-center "
      >
        <div className="logo w-[33.5%] flex justify-end ">
          <div className="title-bog flex items-end ">
            <h2 className="text-5xl font-semibold text_red shadow-sm shadow-gray-700 space-x-2 italic ">
              RR
            </h2>
          </div>
          <h3 className=" h-fit mt-6 text-sm text-white tracking-widest">
            Motors
          </h3>
        </div>
        <nav className="flex-1 ">
          <ul className="flex justify-center space-x-5">
            <li>
              <NavLink
                className="text-white uppercase text-lg py-2 px-4 rounded-md hover:text-red-500 "
                to="#"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white uppercase text-lg py-2 px-4 rounded-md hover:text-red-500 "
                to="#"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white uppercase text-lg py-2 px-4 rounded-md hover:text-red-500 "
                to="#"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
