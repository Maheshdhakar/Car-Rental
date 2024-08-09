import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { NavLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-full"
      } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300 `}
    >
      <div className="card">
        <div className="flex item-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h3>Premium User</h3>
          </div>
        </div>
        {/* links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavLinks.map((data) => (
              <li>
                <a href={data.links}>{data.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* footer */}
      <div>
        <h1>
            Made With ❤ by <a href="#">mahesh dhakar</a>{' '}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
