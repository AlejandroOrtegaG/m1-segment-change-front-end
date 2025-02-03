import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "../styles/Footer.css";

const Footer = ({ checkedItems, neededItems, onCheckedItemsChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const links = [
    { path: "/", label: "Vista principal" },
    { path: "/storage-view", label: "Vista de almacén" },
    { path: "/segment-prechange", label: "Precambio de segmentos" },
  ];

  const handleLinkClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          {links.map((link) => (
            <li key={link.path} onClick={() => handleLinkClick(link.path)}>
              <Link
                className={
                  location.pathname === link.path ? "link selected" : "link"
                }
                to={link.path}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="burger-menu" ref={menuRef} onClick={toggleMenu}>
          <BurgerMenu
            menuOpen={menuOpen}
            checkedItems={checkedItems}
            onCheckedItemsChange={onCheckedItemsChange}
            neededItems={neededItems}
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
