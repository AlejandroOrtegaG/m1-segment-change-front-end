import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "../styles/Footer.css";

const Footer = ({ checkedItems, onCheckedItemsChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    { path: "/App", label: "Vista principal" },
    { path: "/App", label: "Vista adicional" },
    { path: "/App", label: "Vista alternativa" },
    { path: "/App", label: "Vista complementaria" },
  ];

  const handleLinkClick = (index) => {
    setSelectedIndex(index);
    setMenuOpen(false);
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-links">
          {links.map((link, index) => (
            <li key={index} onClick={() => handleLinkClick(index)}>
              <Link
                className={selectedIndex === index ? "link selected" : "link"}
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
          />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
