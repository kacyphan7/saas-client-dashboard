import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  PresentationChartLineIcon,
  MegaphoneIcon,
  Squares2X2Icon,
  ShoppingBagIcon,
  CreditCardIcon,
  CalendarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/solid";
import "./../SideBar.css";

export default function Sidebar() {
  const sidebarStyle = {
    backgroundColor: "#1a1a1a", // Black background color
    color: "#f0f0f0", // White text color
    width: "15rem", // Adjust the width as needed
    height: "100vh", // Make the sidebar 100% of the viewport height
    transition: "background-color 0.3s ease" // Smooth transition to hover state
  };

  return (
    <Card className="p-4 shadow-xl shadow-blue-gray-900/5" style={sidebarStyle}>
      <div
        className="mb-2 p-4"
        style={{
          height: "1.5rem",
          width: "1.5rem",
          marginLeft: "2rem",
          marginBottom: "0.5rem"
        }}
      >
        <Typography
          color="blue-gray"
          style={{ fontSize: "2rem", marginTop: 0 }}
        >
          AnalyThis
        </Typography>
      </div>
      <List className="li-overview" style={{ padding: "30px" }}>
        <ListItem style={{ padding: "10px 0", cursor: "pointer" }}>
          <ListItemPrefix>
            <Squares2X2Icon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />
            Overview
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-analytics"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <PresentationChartLineIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Analytics
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-campaigns"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <MegaphoneIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Campaigns
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-products"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <ShoppingBagIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Products
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-payouts"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <CreditCardIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Payouts
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-schedules"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <CalendarIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Schedules
          </ListItemPrefix>
        </ListItem>

        <ListItem
          className="li-reports"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <DocumentTextIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Reports
          </ListItemPrefix>
        </ListItem>

        <ListItem
          className="li-settings"
          style={{ marginTop: "18rem", padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <Cog6ToothIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Settings
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-support"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <ChatBubbleLeftRightIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Support
          </ListItemPrefix>
        </ListItem>
        <ListItem
          className="li-logOut"
          style={{ padding: "10px 0", cursor: "pointer" }}
        >
          <ListItemPrefix>
            <PowerIcon
              className="h-5 w-5"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                marginRight: "0.5rem"
              }}
            />{" "}
            Log Out
          </ListItemPrefix>
        </ListItem>
      </List>
    </Card>
  );
}
