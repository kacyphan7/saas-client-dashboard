import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./../SalesReport.css";

export default function SalesReportWidget() {
  const chartRef = useRef(null);
  let salesChart = null;

  useEffect(() => {
    const data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "Earnings",
          borderColor: "rgb(75, 192, 192)",
          data: [20, 25, 28, 30, 32, 34, 32, 30, 28, 32, 34, 40, 45],
          fill: false
        },
        {
          label: "Marketing",
          borderColor: "rgb(255, 99, 132)",
          data: [30, 25, 23, 25, 28, 34, 38, 32, 28, 26, 30, 36, 40],
          fill: false
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            generateLabels: function (chart) {
              const originalLabels = Chart.defaults.plugins.legend.labels.generateLabels(
                chart
              );
              originalLabels[0].text = "Earnings";
              return originalLabels;
            }
          }
        }
      }
    };

    if (salesChart) {
      salesChart.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    salesChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options
    });
  }, []);

  return (
    <div className="sales-report-widget">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="widget-header" style={{ marginRight: "10px" }}>
          Sales Report
        </h2>
        <div className="week-dropdown" style={{ marginLeft: "600px" }}>
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
            <option value="month">Month</option>
            {/* Add more week options here */}
          </select>
        </div>
      </div>

      <div
        className="chart-container-wrapper"
        style={{ overflowX: "auto", width: "800px" }}
      >
        <div
          className="chart-container-wrapper"
          style={{ overflowX: "auto", width: "800px" }}
        >
          <div className="chart-container">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
