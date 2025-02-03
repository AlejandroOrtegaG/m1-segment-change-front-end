import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import segments from "../data/segmentsNew";


import "../styles/StorageView.css";
import Storage from "../components/InStorage";
import StorageData from "../components/StorageData";

const StorageView = ({ onCheckedItemsChange }) => {
  const location = useLocation();
  const { segment, adjacentSegments } = location.state || {};

  const neededItems = [true, true, true, true, true, false, true, true];

  return (
    <div className="storage-view-grid">
      <div className="storage-area">
        <Storage />
      </div>
      <div className="storage-data-area">
        <StorageData segment={segments[0]}/>
      </div>
      <Footer
        neededItems={neededItems}
      />
    </div>
  );
};

export default StorageView;
