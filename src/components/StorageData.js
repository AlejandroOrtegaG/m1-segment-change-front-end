import React, { useState, useRef, useEffect } from "react";
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";

const StorageData = ({ segment }) => {
  const rotation = -60;

  return (
    <div className="storage-hex">
      <HexGrid
        width={"200px"}
        height={"200px"}
        className="storage-hexgrid"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <Layout
          size={{ x: 100, y: 100 }}
          origin={{ x: 100, y: 100 }}
        >
          <Hexagon className="storage-data-segment" q={0} s={0} r={0}></Hexagon>
        </Layout>
      </HexGrid>
          {/* {segment.edgeSensors.map((edgeSensor, index) => {
            const edgeRotation = rotation - 60 * index;
            return (
              <>
                <p className="prueba" transform={`rotate(${edgeRotation})`}>Buenas</p>
              </>
            );
          })} */}

          <div className="storage-segment-data">
            <h3>Lado X-X</h3>
            <h3>Parte A</h3>
            <p>Dato 1:</p>
            <p>Dato 2:</p>
            <h3>Parte B</h3>
            <p> Dato 1:</p>
          </div>
    </div>
  );
};

export default StorageData;
