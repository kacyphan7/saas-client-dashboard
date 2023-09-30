import React from "react";
import "./../AnalyticsCard.css"; // Create a CSS file for styling

const AnalyticsCard = () => {
  return (
    <div className="dashboard">
      <div className="ai-analytics-card">
        <div className="card-header">
          <img
            src="https://media4.giphy.com/media/7QXhGKJ43ReXpkUAlq/200w.gif?cid=82a1493bwdt8glo0wkavd6xydu6zfhkafpte706rrfxwlhho&ep=v1_gifs_related&rid=200w.gif&ct=g"
            alt="AI Analytics"
          />
        </div>
        <div className="card-content">
          <button className="ai-button">AI Analytics</button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
