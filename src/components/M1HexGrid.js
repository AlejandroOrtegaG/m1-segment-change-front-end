import "../styles/Hexgrid.css";
import segments from "../data/segmentsNew";
import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const coordinates = [
  { q: 0, s: 1, r: -1 },
  { q: 0, s: 2, r: -2 },
  { q: 0, s: 3, r: -3 },
  { q: 1, s: 1, r: -2 },
  { q: 1, s: 2, r: -3 },
  { q: 2, s: 1, r: -3 },
  { q: 1, s: 0, r: -1 },
  { q: 2, s: 0, r: -2 },
  { q: 3, s: 0, r: -3 },
  { q: 2, s: -1, r: -1 },
  { q: 3, s: -1, r: -2 },
  { q: 3, s: -2, r: -1 },
  { q: 1, s: -1, r: 0 },
  { q: 2, s: -2, r: 0 },
  { q: 3, s: -3, r: 0 },
  { q: 1, s: -2, r: 1 },
  { q: 2, s: -3, r: 1 },
  { q: 1, s: -3, r: 2 },
  { q: 0, s: -1, r: 1 },
  { q: 0, s: -2, r: 2 },
  { q: 0, s: -3, r: 3 },
  { q: -1, s: -1, r: 2 },
  { q: -1, s: -2, r: 3 },
  { q: -2, s: -1, r: 3 },
  { q: -1, s: 0, r: 1 },
  { q: -2, s: 0, r: 2 },
  { q: -3, s: 0, r: 3 },
  { q: -2, s: 1, r: 1 },
  { q: -3, s: 1, r: 2 },
  { q: -3, s: 2, r: 1 },
  { q: -1, s: 1, r: 0 },
  { q: -2, s: 2, r: 0 },
  { q: -3, s: 3, r: 0 },
  { q: -1, s: 2, r: -1 },
  { q: -2, s: 3, r: -1 },
  { q: -1, s: 3, r: -2 },
];

const M1Hexgrid = ({ selectedItems }) => {
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [adjacentSegments, setAdjacentSegments] = useState([]);
  const navigate = useNavigate();
  const rotation = -60;

  const handleHexClick = (segment, index) => {
    const directions = [
      {
        q: coordinates[index].q - 1,
        s: coordinates[index].s + 1,
        r: coordinates[index].r,
      },
      {
        q: coordinates[index].q,
        s: coordinates[index].s + 1,
        r: coordinates[index].r - 1,
      },
      {
        q: coordinates[index].q + 1,
        s: coordinates[index].s,
        r: coordinates[index].r - 1,
      },
      {
        q: coordinates[index].q + 1,
        s: coordinates[index].s - 1,
        r: coordinates[index].r,
      },
      {
        q: coordinates[index].q,
        s: coordinates[index].s - 1,
        r: coordinates[index].r + 1,
      },
      {
        q: coordinates[index].q - 1,
        s: coordinates[index].s,
        r: coordinates[index].r + 1,
      },
    ];

    const adjacentSegments = directions.map((direction) => {
      const adjacentIndex = coordinates.findIndex(
        (coord) =>
          coord.q === direction.q &&
          coord.s === direction.s &&
          coord.r === direction.r
      );
      return segments[adjacentIndex];
    });

    setSelectedSegment(segment);
    setAdjacentSegments(adjacentSegments);

    navigate("/detailed-view", {
      state: { segment, adjacentSegments },
    });
  };

  return (
    <div className="hexgrid-wrapper">
      <HexGrid
        width={"1000px"}
        height={"800px"}
        className="hexgrid"
        viewBox="0 0 150 150"
        preserveAspectRatio="xMidYMid meet"
      >
        <Layout
          size={{ x: 12, y: 12 }}
          flat={true}
          spacing={1.05}
          origin={{ x: 75, y: 75 }}
        >
          {segments.map((segment, index) => (
            <Hexagon
              className="mainview-segment"
              key={index}
              q={coordinates[index].q}
              s={coordinates[index].s}
              r={coordinates[index].r}
              onClick={() => handleHexClick(segment, index)}
            >
              {selectedItems[0] && (
                <Text className="mainview-segment-name" dy={5}>
                  {segment.mirror}
                </Text>
              )}
              {selectedItems[1] && (
                <>
                  <Text className="mainview-segment-number" dy={-1}>
                    S{segment.number}
                  </Text>
                  <Text className="mainview-segment-category" dx={-4.5} dy={-1}>
                    {segment.category}
                  </Text>
                </>
              )}
              {selectedItems[3] &&
                segment.edgeSensors.map((edgeSensor, index) => {
                  const edgeRotation = rotation - 60 * index;
                  return (
                    <>
                    <Text
                      className="mainview-segment-edge-sensor"
                      dx={2}
                      dy={9}
                      transform={`rotate(${edgeRotation})`}
                      >
                      {edgeSensor.name}
                    </Text>
                    <Text
                      className="mainview-segment-edge-sensor-channel"
                      dx={-1}
                      dy={9}
                      transform={`rotate(${edgeRotation})`}
                      >
                      {edgeSensor.mcm.channel}
                    </Text>
                      </>
                  );
                })}

              {selectedItems[4] && (
                <>
                  <Text className="mainview-segment-positioners" dy={-4.5}>
                    {segment.positioners[0].name}
                  </Text>
                  <Text className="mainview-segment-positioners" dy={2.5}>
                    {segment.positioners[1].name} {segment.positioners[2].name}
                  </Text>
                </>
              )}
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default M1Hexgrid;
