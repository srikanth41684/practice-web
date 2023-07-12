import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="px-5 max-w-[1400px] m-auto">
        <ul className="flex gap-60 py-5">
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
    </div>
  );
};

export default Navbar;
