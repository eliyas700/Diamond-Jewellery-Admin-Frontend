import { NavLink } from "react-router-dom";
import { FaBars, FaPaintBrush } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { MdSettingsSuggest } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { FaTachometerAlt, FaCube, FaDollarSign, FaUsers } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { GiNotebook, GiWorld } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { AiFillCamera, AiFillTool } from "react-icons/ai";
import { BsCartCheck, BsTags } from "react-icons/bs";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <FaCube />,
    subRoutes: [
      {
        path: "/products",
        name: "Products ",
      },
      {
        path: "/categories",
        name: "Categories",
      },
      {
        path: "/products/brands",
        name: "Brands",
      },
      {
        path: "/products/attributes",
        name: "Attributes",
      },
      {
        path: "/products/attributeSets",
        name: "Attribute Sets",
      },
      {
        path: "/products/options",
        name: "Options",
      },
      {
        path: "/products/tags",
        name: "Tags",
      },
      {
        path: "/products/reviews",
        name: "Reviews",
      },
    ],
  },
  {
    path: "/sales",
    name: "Sales",
    icon: <FaDollarSign />,
    subRoutes: [
      {
        path: "/sales/orders",
        name: "Orders ",
      },
      {
        path: "/sales/transactions",
        name: "Transactions ",
      },
    ],
  },
  {
    path: "/flashSales",
    name: "Flash Sales",
    icon: <IoIosFlash />,
  },

  {
    path: "/coupons",
    name: "Coupons",
    icon: <BsTags />,
  },
  {
    path: "/pages",
    name: "pages",
    icon: <GiNotebook />,
  },

  {
    path: "/media",
    name: "Media",
    icon: <AiFillCamera />,
  },
  {
    path: "/menu",
    name: "Menu",
    icon: <BiMenu />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUsers />,
  },
  {
    path: "/localization",
    name: "localization",
    icon: <GiWorld />,
    subRoutes: [
      {
        path: "/localization/transactions",
        name: "Transactions ",
      },
      {
        path: "/localization/currency",
        name: "Currency Rates ",
      },
    ],
  },
  {
    path: "/appearance",
    name: "Appearance",
    icon: <FaPaintBrush />,
    subRoutes: [
      {
        path: "/users/users",
        name: "Sliders ",
      },
      {
        path: "/users/roles",
        name: "Store Front ",
      },
    ],
  },
  {
    path: "/tools",
    name: "Tools",
    icon: <AiFillTool />,
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <GoGraph />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <MdSettingsSuggest />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h4
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Diamond
                </motion.h4>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
