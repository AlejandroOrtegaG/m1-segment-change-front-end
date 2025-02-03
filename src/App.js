import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import DetailedView from "./views/DetailedView";
import "./styles/App.css";
import Header from "./components/Header";
import SegmentPrechange from "./views/SegmentPrechange";
import StorageView from "./views/StorageView";
import PrechangeForm from "./components/PrechangeForm";
import DetailedViewHistory from "./components/DetailedViewHistory";
import ElementData from "./components/ElementData";

function App() {
  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
  };
  console.log(checkedItems, "app");

  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <MainView
                checkedItems={checkedItems}
                onCheckedItemsChange={handleCheckedItemsChange}
              />
            }
          />
          <Route
            path="/detailed-view"
            element={
              <DetailedView
                checkedItems={checkedItems}
                onCheckedItemsChange={handleCheckedItemsChange}
              />
            }
          />
          <Route
            path="/segment-prechange"
            element={
              <SegmentPrechange
                checkedItems={checkedItems}
                onCheckedItemsChange={handleCheckedItemsChange}
              />
            }
          />
          <Route
            path="/storage-view"
            element={
              <StorageView
                checkedItems={checkedItems}
                onCheckedItemsChange={handleCheckedItemsChange}
              />
            }
          />

          <Route path="/prechange-form" element={<PrechangeForm />} />
          <Route
            path="/detailed-view-history"
            element={<DetailedViewHistory />}
          />
          <Route path="/element-data" element={<ElementData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
