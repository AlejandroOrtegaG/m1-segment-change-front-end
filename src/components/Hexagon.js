import "../styles/Hexagon.css";
import React from "react";

const Hexagon = ({ segment, selectedSegments, style }) => {
  if (!segment || !selectedSegments) {
    return (
      <div className="hex">
        <div className="inner-hex"></div>
      </div>
    );
  }

  const {
    name,
    segmentNumber,
    type,
    borderSensors,
    positioners,
  } = segment;

  const borderSensorPositions = [
    "top",
    "top-right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "top-left",
  ];

  return (
    <div className="hex" style={style}>
      <div className="inner-hex">
        {selectedSegments[3] && (
          <div className="positioners">
            <div className="positioners-above">
              {positioners.slice(0, 2).map((positioner, index) => (
                <div key={index} className="positioner">
                  <div className="gauge">{positioner.gauge}</div>
                  <div className="positioner-value">{positioner.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="type-name">
          {selectedSegments[1] && (
            <>
              <h2>{type}</h2>
              <h1>{segmentNumber}</h1>
            </>
          )}
        </div>
        <div className="positioners-below">
          {selectedSegments[3] && (
            <div className="positioners">
              {positioners.slice(2).map((positioner, index) => (
                <div key={index} className="positioner">
                  <div>{positioner.value}</div>
                  <div className="gauge">{positioner.gauge}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="name">{selectedSegments[0] && <h2>{name}</h2>}</div>
        {selectedSegments[2] && (
          <div className="border-sensors">
            {borderSensors.map((sensor, index) => (
              <div
                key={index}
                
                className={`border-sensor ${borderSensorPositions[index % 6]} ${sensor.disabled && selectedSegments[4] ? 'disabled' : ''}`}
              >
                <p className="acpChannel">{sensor.acpChannel}</p>
                <p>{sensor.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hexagon;
