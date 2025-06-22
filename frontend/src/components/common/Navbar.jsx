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
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setCatalogDropdownOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
      className={`z-[9999] flex h-14 w-full items-center justify-center border-b-[1px] theme-border theme-bg-primary theme-text-primary translate-y-0 transition-all fixed top-0 left-0`}
      style={{
        backgroundColor: isDarkMode ? 'rgba(22, 24, 39, 0.7)' : 'rgba(230, 230, 230, 0.7)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)'
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
          <ul className="flex items-center gap-x-6 theme-text-primary">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div 
                    className="group relative flex cursor-pointer items-center gap-1" 
                    onClick={() => {
                      setCatalogDropdownOpen(!catalogDropdownOpen);
                      setServicesDropdownOpen(false);
                    }}
                    onMouseEnter={() => {
                      setCatalogDropdownOpen(true);
                      setServicesDropdownOpen(false);
                    }}
                    onMouseLeave={() => {
                      setCatalogDropdownOpen(false);
                    }}
                  >
                    <p className="py-1">{link.title}</p>
                    <MdKeyboardArrowDown className={`transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 transition-all duration-300 ${catalogDropdownOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'}`}>
                      {/* Arrow Pointer */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#f5f5f5] border border-[#e5e7eb] dark:bg-gray-700 dark:border-gray-600"></div>
                      
                      {/* Dropdown Content */}
                      <div 
                        className="relative bg-[#f5f5f5] border border-[#e5e7eb] dark:bg-gray-700 dark:border-gray-600 rounded-xl shadow-2xl overflow-hidden theme-submenu-text"
                        onMouseEnter={() => setCatalogDropdownOpen(true)}
                        onMouseLeave={() => setCatalogDropdownOpen(false)}
                      >
                        <div className="p-2">
                          {loading ? (
                            <p className="text-center py-4">Loading...</p>
                          ) : subLinks?.length ? (
                            subLinks.map((subLink, i) => (
                              <Link
                                key={i}
                                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                                className="block px-4 py-3 rounded-lg hover:bg-stone-200 dark:hover:bg-gray-600 transition-colors duration-200 theme-submenu-text"
                                onClick={() => setCatalogDropdownOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))
                          ) : (
                            <p className="text-center py-4">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : link.title === "Services" ? (
                  <div 
                    className="group relative flex cursor-pointer items-center gap-1" 
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen);
                      setCatalogDropdownOpen(false);
                    }}
                    onMouseEnter={() => {
                      setServicesDropdownOpen(true);
                      setCatalogDropdownOpen(false);
                    }}
                    onMouseLeave={() => {
                      setServicesDropdownOpen(false);
                    }}
                  >
                    <p className="py-1">{link.title}</p>
                    <MdKeyboardArrowDown className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 transition-all duration-300 ${servicesDropdownOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'}`}>
                      {/* Arrow Pointer */}
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-[#f5f5f5] border border-[#e5e7eb] dark:bg-gray-700 dark:border-gray-600"></div>
                      
                      {/* Dropdown Content */}
                      <div 
                        className="relative bg-[#f5f5f5] border border-[#e5e7eb] dark:bg-gray-700 dark:border-gray-600 rounded-xl shadow-2xl overflow-hidden theme-submenu-text"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                      >
                        <div className="p-2">
                          {link.children?.map((child, i) => (
                            <Link
                              key={i}
                              to={child.path}
                              className="block px-4 py-3 rounded-lg hover:bg-stone-200 dark:hover:bg-gray-600 transition-colors duration-200 theme-submenu-text"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? "theme-button-primary rounded-xl" : ""} py-1 px-3`}>
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
                className="rounded-[8px] theme-button-primary px-[12px] py-[8px]"
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
                  {link.title === "Services" ? (
                    <div>
                      <p className="block rounded-xl p-2 font-semibold">{link.title}</p>
                      <div className="ml-4 flex flex-col gap-2">
                        {link.children?.map((child, i) => (
                          <Link
                            key={i}
                            to={child.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-xl p-2 hover:bg-richblack-800 text-sm"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link?.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-xl p-2 hover:bg-richblack-800"
                    >
                      {link.title}
                    </Link>
                  )}
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
