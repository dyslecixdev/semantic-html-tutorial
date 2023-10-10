import { Link } from "react-router-dom";

import { useScrollPosition } from "../hooks/useScrollPosition";

import { ModalProps } from "../types/interfaces";

function Navbar({ setModal }: ModalProps) {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <header
        onClick={() => setModal("header")}
        className={`w-full ${
          scrollPosition > 0 ? "h-[8vh] shadow-xl" : "h-[12vh]"
        } fixed top-0 p-4 flex flex-row justify-between items-center bg-red-600 hover:bg-red-500 transition-all duration-300 ease-in-out cursor-pointer z-10`}
      >
        <h1
          className={` ${
            scrollPosition > 0 ? "text-xl" : "text-2xl"
          } font-black transition-all duration-300 ease-in-out`}
        >
          Fake Philosophy Blog
        </h1>

        <nav
          onClick={(e) => {
            e.stopPropagation();
            setModal("nav");
          }}
          className={`px-2 ${
            scrollPosition > 0 ? "py-1" : "py-3"
          } flex gap-4 rounded-sm border border-black bg-orange-600 hover:bg-orange-500 transition-all duration-300 ease-in-out`}
        >
          <Link
            to="https://christian-dean-demesa-portfolio.netlify.app/"
            target="_blank"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Portfolio
          </Link>
          <Link
            to="https://logiclyceum.com/"
            target="_blank"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Blog
          </Link>
          <Link
            to="https://github.com/christiandeandemesa"
            target="_blank"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            GitHub
          </Link>
          <Link
            to="https://twitter.com/DyslecixDev"
            target="_blank"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            Twitter
          </Link>
          <Link
            to="https://www.linkedin.com/in/christian-demesa-learning-new-things/"
            target="_blank"
            className="hover:text-white transition duration-300 ease-in-out"
          >
            LinkedIn
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
