import { FaGithub, FaHome } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 backdrop-blur-sm sticky top-0 bg-black/30 z-50">
      <Link to={"/"} className="flex items-center gap-1 cursor-pointer">
        <img
          className="icon"
          style={{ objectFit: "contain" }}
          src="/rebox.png"
          width={40}
          alt="Rebox Logo"
        />
        <h3 className="text-3xl dark:text-white text-black">
          Rebox<span className="text-blue-400 text-3xl">UI</span>
        </h3>
      </Link>
      <ul>
        <li className="flex gap-1 cursor-pointer">
          <Link className="flex items-center group" to={"/"}>
            <FaHome size={25} className="mr-2 mt-1"/>
             <p
              className="opacity-0 -translate-x-3 transition-all duration-300 ease-out 
                 group-hover:opacity-100 group-hover:translate-x-0 flex items-center">
              Home
            </p>
          </Link>
          <Link className="flex items-center group" to="/components">
            <IoLogoDropbox size={30} className="mr-2 mt-1" />
            <p
              className="opacity-0 -translate-x-3 transition-all duration-300 ease-out 
                 group-hover:opacity-100 group-hover:translate-x-0 flex items-center">
              Components
            </p>
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
      </div>
    </nav>
  );
}
