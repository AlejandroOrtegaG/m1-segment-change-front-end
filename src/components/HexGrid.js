import "../styles/Hexgrid.css";
import Hexagon from "./Hexagon";
import segments from "../data/segments";

const HexGrid = ({ selectedSegments }) => {
  console.log(selectedSegments, "hexgrid");
  const hexagonCounts = [1, 2, 3, 4, 3, 4, 2, 4, 3, 4, 3, 2, 1];

  console.log(selectedSegments, "hexgrid")

  return (
    <div className="hexgrid-container">
      <div className="hexgrid">
        {hexagonCounts.map((hexCount, rowIndex) => {
          const startIndex = hexagonCounts.slice(0, rowIndex).reduce((acc, count) => acc + count, 0);
          const rowSegments = segments.slice(startIndex, startIndex + hexCount);

          return (
            <div key={rowIndex} className={rowIndex === 6 ? "center" : "hex-row"}>
              {rowSegments.map((segment) => (
                <Hexagon 
                  className="hex" 
                  key={segment.id} 
                  segment={segment} 
                  selectedSegments={selectedSegments} 
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HexGrid;