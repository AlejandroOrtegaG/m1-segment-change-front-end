import React from "react";
import "../styles/BurgerMenu.css";

const menuItems = [
  "Nombre del segmento",
  "Número de segmento",
  "Sensores de borde",
  "Posicionadores",
  "Sensores deshabilitados",
];

const BurgerMenu = ({ menuOpen, checkedItems, onCheckedItemsChange }) => {
  const handleItemClick = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    onCheckedItemsChange(updatedCheckedItems);
  };

  return (
    <div>
      {menuOpen && (
        <div className="menu" onClick={(e) => e.stopPropagation()}>
          <ul className="hide-elements-menu">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item" onClick={() => handleItemClick(index)}>
                <button className="menu-button">
                  <input
                    type="checkbox"
                    checked={checkedItems[index]}
                    className="custom-checkbox"
                    onChange={() => handleItemClick(index)}
                  />
                  <span>{item}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="burger-icon">
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
            fillRule="nonzero"
          />
        </svg>
      </div>
    </div>
  );
};

export default BurgerMenu;