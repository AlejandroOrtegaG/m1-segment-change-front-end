import React, { useState } from "react";
import "../styles/MainView.css";
import Storage from "../components/InStorage";
import Footer from "../components/Footer";
import M1Hexgrid from "../components/M1HexGrid";

const MainView = ({ onCheckedItemsChange }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
    if (onCheckedItemsChange) {
      onCheckedItemsChange(updatedCheckedItems);
    }
  };

  const neededItems = [true,true,false,true,true,false,false,false]
  



  return (
    <div className="main-view-grid">
      <div className="storage-area">
        <Storage  />
      </div>
      <div className="hexgrid-area">
        <M1Hexgrid selectedItems={checkedItems} />
      </div>
      <Footer checkedItems={checkedItems} neededItems={neededItems} onCheckedItemsChange={handleCheckedItemsChange} />
    </div>
  );
};

export default MainView;
