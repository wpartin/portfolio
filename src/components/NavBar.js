import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../logo.png";

export default function NavBar() {
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <nav className="flex flex-col items-center md:items-left md:flex-row w-screen md:pl-12 lg:pl-24">
          <div className="flex">
            <NavLink
              to="/"
              exact
              className="inline-flex items-center text-gray-700 pt-6 md:py-6 px-3 mr-4 hover:text-blue-500 text-4xl font-bold poppins tracking-widest"
            >
              <img src={logo} alt="logo" className="flex-shrink w-64 h-16" />
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/post"
              activeClassName="text-gray-100 bg-blue-300"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-700 hover:text-blue-500"
            >
              Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-black bg-blue-300"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-blue-500"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-black bg-blue-300"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-blue-500"
            >
              About Me
            </NavLink>
          </div>
        </nav>
        <div className="inline-flex justify-center py-3 px-3 mb-3 md:my-6 md:pr-12 lg:pr-24">
          <SocialIcon
            url="https://www.linkedin.com/in/weston-partin/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
