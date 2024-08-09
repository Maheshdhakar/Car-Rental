import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const NavLinks = [
  {
    id: "1",
    name: "HOME",
    links: "/#",
  },
  {
    id: "2",
    name: "CARS",
    links: "/#cars",
  },
  {
    id: "3",
    name: "ABOUT",
    links: "/#about",
  },
  {
    id: "4",
    name: "BOOKING",
    links: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  // menubar
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className=" py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium"
                    href={data.links}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* dark light mode */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </div>
            </ul>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* dark light mode */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </div>
            
              {/* mobile humburger menu */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  size={30}
                  className="cursor-pointer transition-all"
                />
              )}
            
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
