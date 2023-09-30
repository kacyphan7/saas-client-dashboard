import React, { useEffect } from "react";
import * as d3 from "d3";
import "./../SalesLocation.css";
import "./../data/world-map.json";

async function renderWorldMap(svgElement) {
  try {
    // Load the world map data using fetch
    const response = await fetch("./../data/world-map.json");
    if (!response.ok) {
      throw new Error("Failed to fetch world map data");
    }

    // Rest of your code using geopath
  } catch (error) {
    console.error("Error loading world map data:", error);
  }
}

const SalesLocation = () => {
  useEffect(() => {
    const worldMapSvg = d3.select("#world-map-svg");
    renderWorldMap(worldMapSvg);
  }, []);

  return (
    <div className="sales-location-card">
      <div
        className="card-header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h2 style={{ marginRight: "450px" }}>Sales Location</h2>
        <div className="week-dropdown">
          <select
            id="week-select"
            style={{
              backgroundColor: "#151618",
              color: "#777",
              border: "none",
              fontSize: "20px"
            }}
          >
            <option value="week">Week</option>
            {/* Add more week options here */}
          </select>
        </div>
      </div>
      <img
        src="https://pngimg.com/uploads/world_map/world_map_PNG28.png"
        alt="Geographic Information Science Map"
        style={{ width: "100%", height: "250px" }}
      />
      {/* <div id="world-map">
        <svg id="world-map-svg" width="100%" height="100%"></svg>
      </div> */}
    </div>
  );
};

export default SalesLocation;
