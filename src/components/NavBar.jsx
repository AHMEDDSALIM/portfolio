import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const styles = {
  activeLink: 'text-[#F05454]',
  navItem: 'navbar-animation',
  underline: 'absolute left-0 bottom-0 h-[4px] bg-[#F05454] w-full z-10',
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
            <li className="text-xl md:text-2xl">AHMED DAWOOD</li>
            <li>
              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-4 transition-all">
                <li className={styles.navItem}>
                  <Link to="/">
                    <span className="text-[#F05454]">01.</span> Home
                  </Link>
                  {isActive('/') && (
                    <motion.div
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.underline}
                    ></motion.div>
                  )}
                </li>
                <li className={styles.navItem}>
                  <Link to="/projects">
                    <span className="text-[#F05454]">02.</span> Projects
                  </Link>
                  {isActive('/projects') && (
                    <motion.div
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.underline}
                    ></motion.div>
                  )}
                </li>
                <li className={styles.navItem}>
                  <Link to="/contact">
                    <span className="text-[#F05454]">03.</span> Contact
                  </Link>
                  {isActive('/contact') && (
                    <motion.div
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.underline}
                    ></motion.div>
                  )}
                </li>
              </ul>
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center md:hidden "
              >
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                  className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div
        className={`sideNav transition-all duration-300 w-0 ${
          isOpen ? 'w-60 md:w-0' : 'w-0'
        } drop-shadow-lg`}
      >
        <button onClick={handleClick} className="closeBtn">
          <span
            className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm rotate-45 translate-y-1`}
          ></span>
          <span
            className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 opacity-0`}
          ></span>
          <span
            className={`bg-[#2b2e34] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1`}
          ></span>
        </button>
        <ul className={`flex flex-col gap-4 p-10 text-nowrap`}>
          <li className={styles.navItem}>
            <Link to="/">
              <span className="text-[#F05454]">01.</span> Home
            </Link>
            {isActive('/') && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className={styles.underline}
              ></motion.div>
            )}
          </li>
          <li className={styles.navItem}>
            <Link to="/projects">
              <span className="text-[#F05454]">02.</span> Projects
            </Link>
            {isActive('/projects') && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className={styles.underline}
              ></motion.div>
            )}
          </li>
          <li className={styles.navItem}>
            <Link to="/contact">
              <span className="text-[#F05454]">03.</span> Contact
            </Link>
            {isActive('/contact') && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className={styles.underline}
              ></motion.div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
