import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DetailedAndBackViews from "../components/DetailedAndBackViews";
import Footer from "../components/Footer";
import SegmentActions from "../components/SegmentActions";

import "../styles/DetailedView.css";

const DetailedView = ({ onCheckedItemsChange }) => {
  const location = useLocation();
  const { segment, adjacentSegments } = location.state || {};

  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
    if (onCheckedItemsChange) {
      onCheckedItemsChange(updatedCheckedItems);
    }
  };

  const neededItems = [true, true, true, true, true, false, true, true];

  return (
    <>
      <div className="detailed-view-actions">
        <DetailedAndBackViews
          segment={segment}
          adjacentSegments={adjacentSegments}
          checkedItems={checkedItems}
        />
        <SegmentActions segment={segment} />
      </div>
      <Footer
        checkedItems={checkedItems}
        neededItems={neededItems}
        onCheckedItemsChange={handleCheckedItemsChange}
      />
    </>
  );
};

export default DetailedView;
