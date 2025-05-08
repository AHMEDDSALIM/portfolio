import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const styles = {
  activeLink: "text-[#F05454]",
  navItem: "navbar-animation",
  underline: "absolute left-0 bottom-0 h-[4px] bg-[#F05454] w-full z-10",
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function isActive(href) {
    return href === location.pathname;
  }

  return (
    <>
      <header className="mt-4">
        <nav className="w-full flex justify-center">
          <ul className="w-11/12 flex justify-between items-center">
            <li className="text-xl md:text-2xl">John Doe</li>
            <li>
              {/* Desktop Menu */}
              <ul className={`hidden md:flex gap-4`}>
                {["/", "/projects", "/contact"].map((path, index) => (
                  <li key={index} className={styles.navItem}>
                    <Link to={path}>
                      <span className="text-[#F05454]">{`0${index + 1}.`}</span>{" "}
                      {path === "/"
                        ? "Home"
                        : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </Link>
                    {isActive(path) && (
                      <motion.div
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.underline}
                      ></motion.div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center md:hidden"
              >
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
              </button>

              {/* Mobile Menu */}
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && (
        <div
          className={`fixed w-full md:sr-only bg-[#e0e0e0] z-50 p-10 shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-row justify-center`}
        >
          <ul className="flex flex-col gap-4">
            {["/", "/projects", "/contact"].map((path, index) => (
              <li key={index} className={styles.navItem}>
                <Link to={path}>
                  <span className="text-[#F05454]">{`0${index + 1}.`}</span>{" "}
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
                {isActive(path) && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className={styles.underline}
                  ></motion.div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
