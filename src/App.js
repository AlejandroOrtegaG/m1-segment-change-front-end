import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainView from "./views/MainView";
import DetailedView from "./views/DetailedView";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <MainView
                selectedSegments={checkedItems}
                onCheckedItemsChange={handleCheckedItemsChange}
              />
            }
          />
          <Route path="/detailed-view" element={<DetailedView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
