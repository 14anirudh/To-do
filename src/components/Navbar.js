import React from "react";
import { Link } from "react-router-dom";

import { MdDescription } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BiSolidError } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <aside>
          <ul>
            <div className="link_div">
              <Link to="/" className="link">
                <li>
                  <AiFillHome size={16} /> Home
                </li>
              </Link>
              <Link to="/about" className="link">
                <li>
                  <MdDescription size={16} /> About
                </li>
              </Link>
              <Link to="/tasks" className="link">
                <li>
                  <HiClipboardList size={16} /> Tasks
                </li>
              </Link>
              <Link to="/error" className="link">
                <li>
                  <BiSolidError size={16} /> Error
                </li>
              </Link>
            </div>
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
