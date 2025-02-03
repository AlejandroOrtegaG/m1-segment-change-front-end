import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import PrechangeHexgrid from "../components/PrechangeHexgrid";
import PrechangeActions from "../components/PrechangeActions";
import segmentChange from "../data/segmentChange.json";


import "../styles/SegmentPrechange.css"

const SegmentPrechange = ({ onCheckedItemsChange }) => {
  const location = useLocation();
  const { segment, adjacentSegments } = location.state || {};

  const startDates = segmentChange.proposal.map(
    (proposal) => proposal
  );

  const [checkedItems, setCheckedItems] = useState(new Array(9).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
    if (onCheckedItemsChange) {
      onCheckedItemsChange(updatedCheckedItems);
    }
  };

  const neededItems = [
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ];

  return (
    <>
      <div className="prechange-view-actions">
        <PrechangeHexgrid selectedItems={checkedItems} startDates={startDates}/>
        <PrechangeActions startDates={startDates}/>
      </div>
      <Footer
        checkedItems={checkedItems}
        neededItems={neededItems}
        onCheckedItemsChange={handleCheckedItemsChange}
      />
    </>
  );
};

export default SegmentPrechange;
