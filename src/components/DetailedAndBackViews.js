import { HexGrid, Layout, Hexagon, Text } from "react-hexgrid";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "../styles/DetailedAndBackView.css";

const qCoordinates = [-1, 0, 1, 1, 0, -1];
const sCoordinates = [1, 1, 0, -1, -1, 0];
const rCoordinates = [0, -1, -1, 0, 1, 1];



const TabPanel = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const DetailedAndBackViews = ({ segment, adjacentSegments }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Vista detallada" className="detailed-view" />
            <Tab label="Vista trasera" className="back-view" />
          </Tabs>
        </Box>
        <TabPanel value={tabValue} index={0}>
          <HexGrid
            width={"750px"}
            viewBox="0 0 100 100"
            className="hexgrid-detailed"
            preserveAspectRatio="xMidYMid meet"
          >
            <Layout
              size={{ x: 18, y: 18 }}
              flat={true}
              spacing={1.05}
              origin={{ x: 50, y: 50 }}
            >
              <Hexagon q={0} s={0} r={0}>
                <Text dy={-1.5}>{segment.number}</Text>
                <Text dy={1.5}>{segment.mirror}</Text>
              </Hexagon>
              {adjacentSegments.map((adjSegment, index) => {
                if (!adjSegment) return null;
                return (
                  <Hexagon
                    className="detailed-view-hexagon"
                    key={index}
                    q={qCoordinates[index]}
                    s={sCoordinates[index]}
                    r={rCoordinates[index]}
                  >
                    <Text dy={-1.5}>{segment.number}</Text>
                    <Text dy={1.5}>{segment.mirror}</Text>
                  </Hexagon>
                );
              })}
            </Layout>
          </HexGrid>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <HexGrid
            width={"750px"}
            viewBox="0 0 100 100"
            className="hexgrid-detailed"
            preserveAspectRatio="xMidYMid meet"
          >
            <Layout
              size={{ x: 18, y: 18 }}
              flat={true}
              spacing={1.05}
              origin={{ x: 50, y: 50 }}
            >
              <Hexagon q={0} s={0} r={0}>
                <Text>Vista trasera</Text>
              </Hexagon>
            </Layout>
          </HexGrid>
        </TabPanel>
      </Box>
    </>
  );
};

export default DetailedAndBackViews;
