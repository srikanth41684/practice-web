import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex">
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" href="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" href="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
