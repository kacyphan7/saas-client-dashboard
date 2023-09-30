import React, { useEffect } from "react";
import renderWorldMap from "./renderWorldMapFunction";
import * as d3 from "d3";

const WorldMap = () => {
  const svgElement = d3.select("#world-map-svg");

  useEffect(() => {
    renderWorldMap(svgElement);
  }, [svgElement]);

  return (
    <div>
      <svg id="world-map-svg" width="500" height="300"></svg>
    </div>
  );
};

export default WorldMap;
