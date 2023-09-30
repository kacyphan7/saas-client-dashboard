import React from "react";
import { Input } from "@material-tailwind/react";
import {
  MoonIcon,
  BellIcon,
  UserIcon,
  PlusIcon,
  DownloadIcon
} from "@heroicons/react/solid"; // Import icons from Heroicons
import "./styles.css";
import SalesReportWidget from "./components/SalesReportWidget";
import AnalyticsCard from "./components/AiAnalytic";
import SalesByTimeCard from "./components/SalesByTime";
import SalesLocation from "./components/SalesLocation";
//import Layout from "./Layout"; // Import the Layout component correctly

export default function App() {
  return (
    // <Layout>
    <div className="App">
      <div className="flex">
        <div className="App">
          <div className="header">
            <div className="search-bar">
              <Input
                type="text"
                placeholder="&#128269; Search..."
                className="search-input"
              />
            </div>
            <div className="icons">
              <MoonIcon className="icon" />
              <BellIcon className="icon" />
              <UserIcon className="icon" />
            </div>
          </div>
          <div className="welcome-container">
            <div className="welcome-text">
              Welcome back, <span>Jessica!</span>
            </div>
            <div className="button-container">
              <button className="action-button">
                <PlusIcon className="button-icon" />
                Add Widget
              </button>
              <button className="action-button">
                <DownloadIcon className="button-icon" />
                Export Report
              </button>
            </div>
          </div>
          <div classname="container">
            <div className="widget-container">
              <SalesReportWidget />
              <AnalyticsCard />
            </div>
            <div className="bottom-widget-container">
              <SalesByTimeCard />
              <SalesLocation />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
}
