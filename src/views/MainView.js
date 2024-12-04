import React, { useState } from "react";
import "../styles/MainView.css";
import HexGrid from "../components/HexGrid";
import Storage from "../components/InStorage";
import Footer from "../components/Footer";

const MainView = ({ selectedSegments, onCheckedItemsChange }) => {
  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
    if (onCheckedItemsChange) {
      onCheckedItemsChange(updatedCheckedItems);
    }
  };

  return (
    <div className="main-view-grid">
      <div className="storage-area">
        <Storage selectedSegments={selectedSegments} />
      </div>
      <div className="hexgrid-area">
        <HexGrid selectedSegments={selectedSegments} />
      </div>
      <Footer checkedItems={checkedItems} onCheckedItemsChange={handleCheckedItemsChange} />
    </div>
  );
};

export default MainView;
