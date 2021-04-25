import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <nav className="flex flex-col items-center md:items-left md:flex-row w-screen md:pl-24">
          <div className="flex">
            <NavLink
              to="/"
              exact
              activeClassName="text-yellow-400"
              className="inline-flex items-center text-white pt-6 md:py-6 px-3 mr-4 hover:text-yellow-400 text-4xl font-bold poppins tracking-widest"
            >
              Weston
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/post"
              activeClassName="text-blue-100 bg-blue-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-blue-100 bg-blue-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-blue-100 bg-blue-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-yellow-400"
            >
              About Me
            </NavLink>
          </div>
        </nav>
        <div className="inline-flex justify-center py-3 px-3 mb-3 md:my-6 md:pr-24">
          <SocialIcon
            url="http://linkedin.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://youtube.com/"
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
