import { useCallback, useEffect, useState } from "react";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavbarLinks } from "../../../data/navbar-links";
import beejaLogoLight from "../../assets/Logo/beeja logo small size light.png";
import beejaLogoDark from "../../assets/Logo/beejalogo.png";
import { fetchCourseCategories } from "./../../services/operations/courseDetailsAPI";
import { useTheme } from "../../context/ThemeContext";
import LightBulbToggle from "../../pages/LightBulbToggle";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const fetchSublinks = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetchCourseCategories()
      setSubLinks(res)
    } catch (error) {
      console.log("Could not fetch the category list = ", error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchSublinks();
  }, [fetchSublinks]);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) setShowNavbar("hide");
      else setShowNavbar("show");
    } else setShowNavbar("top");
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const handleLogin = () => {
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const handleSignup = () => {
    navigate("/signup");
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`z-[10] flex h-14 w-full items-center justify-center border-b-[1px] theme-border theme-bg-primary theme-text-primary translate-y-0 transition-all ${showNavbar}`}
      style={{
        backgroundColor: 'var(--navbar-bg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Home">
          <img
            src={isDarkMode ? beejaLogoLight : beejaLogoDark}
            width={120}
            height={30}
            loading="lazy"
            alt="Beeja Logo"
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-x-6 theme-text-primary">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p>{link.title}</p>
                    <MdKeyboardArrowDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[10000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg theme-submenu-bg p-4 theme-submenu-text opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] theme-submenu-shadow">
                      <div className="absolute left-[50%] top-0 z-[100] h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded theme-submenu-bg"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks?.length ? (
                        subLinks.map((subLink, i) => (
                          <Link
                            key={i}
                            to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-opacity-80 theme-submenu-text"
                          >
                            {subLink.name}
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? "bg-yellow-25 text-black" : ""} rounded-xl p-1 px-3`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Content */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          {!token && (
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleLogin}
                className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
              >
                Log in
              </button>
              <button
                onClick={handleSignup}
                className="rounded-[8px] bg-yellow-50 px-[12px] py-[8px] text-richblack-900"
              >
                Sign up
              </button>
            </div>
          )}

          {/* Theme Toggle */}
          <div className="flex items-center">
            <LightBulbToggle className="theme-btn-navbar" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col h-6 w-6 justify-between items-center group"
          >
            <span
              className={`h-0.5 w-full theme-text-primary rounded-lg transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full theme-text-primary rounded-lg transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full theme-text-primary rounded-lg transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 z-50 w-full theme-bg-primary p-4 md:hidden">
            <ul className="flex flex-col gap-4 theme-text-primary">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl p-2 hover:bg-richblack-800"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              {!token && (
                <>
                  <li>
                    <button
                      onClick={handleLogin}
                      className="w-full text-left block rounded-xl p-2 hover:bg-richblack-800"
                    >
                      Log in
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleSignup}
                      className="w-full text-left block rounded-xl p-2 hover:bg-richblack-800"
                    >
                      Sign up
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
