import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "./../SalesByTimeCard.css";

const SalesByTimeCard = () => {
  const [gmtOffset, setGmtOffset] = useState(-8); // Initial GMT offset
  const [salesData, setSalesData] = useState([10, 15, 20, 25, 30, 35, 40]); // Placeholder sales data

  // Function to handle GMT offset change
  const handleGmtChange = (e) => {
    setGmtOffset(parseInt(e.target.value));
    // You would fetch and update real data based on the selected GMT offset here
  };

  // Define chart data
  const chartData = {
    labels: ["Time1", "Time2", "Time3", "Time4", "Time5", "Time6", "Time7"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
        hoverBorderColor: "rgba(75, 192, 192, 1)",
        data: salesData
      }
    ]
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="sales-by-time-card">
      <div
        className="card-header"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h2 style={{ marginRight: "150px" }}>Sales by Time</h2>
        <div className="gmt-dropdown">
          <select
            id="gmt-select"
            onChange={handleGmtChange}
            value={gmtOffset}
            style={{
              backgroundColor: "#151618",
              color: "#777",
              border: "none",
              fontSize: "20px"
            }}
          >
            <option value="-8">GMT-8</option>
            {/* other GMT options here */}
          </select>
        </div>
      </div>

      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SalesByTimeCard;
