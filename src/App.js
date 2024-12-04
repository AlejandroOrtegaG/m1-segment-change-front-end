import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainView from "./views/MainView";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  const [checkedItems, setCheckedItems] = useState(new Array(11).fill(true));

  const handleCheckedItemsChange = (updatedCheckedItems) => {
    setCheckedItems(updatedCheckedItems);
    console.log(updatedCheckedItems);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <MainView 
          selectedSegments={checkedItems} 
          onCheckedItemsChange={handleCheckedItemsChange} 
        />
      </div>
    </Router>
  );
}

export default App;