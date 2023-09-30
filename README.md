# SaaS Client Dashboard React App
Welcome to the SaaS Client Dashboard React App! This application provides an intuitive dashboard for managing client data, monitoring sales performance, and analyzing sales by time and location. It's built with React, Material-UI for the sidebar, Heroicons for icons, and Chart.js for displaying sales reports.

# Table of Contents
- Features
- Installation
- Usage
- Future Enhancements
- License

## Features
### Sidebar with Material-UI
The dashboard features a sleek sidebar created with Material-UI, providing easy navigation to various sections of the application.

### Sales Reports with Chart.js
- Display sales data using interactive bar charts.
- Analyze sales by time periods, weekly.

```
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            generateLabels: (chart) => {
              const originalLabels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
              originalLabels[0].text = "Earnings";
              return originalLabels;
            },
          },
        },
      },
    };

    if (salesChart) salesChart.destroy();
    const ctx = chartRef.current.getContext("2d");
    salesChart = new Chart(ctx, { type: "line", data, options });
  }, []);
```
The labels array for the chart's x-axis is generated using Array.from to create an array of numbers from 1 to 12. The datasets array contains data for "Earnings" and "Marketing" as well as their respective styling. Options for the chart, such as responsiveness, axis scaling, and legend customization, are specified. The chart instance is destroyed if it already exists to prevent duplication. The rendering context (ctx) for the chart is obtained from the chartRef. Finally, a new Chart.js instance is created using the data and options.


### Sales Location with D3 (In Progress)
- Visualize sales locations on an interactive map.
- Utilize D3.js for enhanced data visualization.

The Sales Location is in the process of integrating D3.js to render a dynamic world map based on fetched data. The code loads the map data asynchronously and starts setting up the component structure, but the D3.js rendering logic is currently commented out, and the map is displayed as a static image. To complete the functionality, this will need to be uncomment and implement the D3.js code to render the map dynamically.

## Installation
To run this application locally, follow these steps:

1. Clone the repository to your local machine:

    `git clone <repository-url>`

2. Navigate to the project directory:

    `cd saas-client-dashboard`

3. Install the required dependencies:

    `npm install`

# Usage
1. Start the development server:

    `npm start`

2. Open your web browser and navigate to http://localhost:3000 to access the SaaS Client Dashboard.

3. Explore the various features, including the sidebar navigation, sales reports, and any other implemented functionalities.

# Future Enhancements
Plans for the future of this SaaS Client Dashboard React App:

- Geolocation-Based Sales Insights: Finalize the integration of D3.js to provide geolocation-based sales analytics.

- Scrollable Sales Report: Add a scroll bar on the x-axis of the sales report to handle large datasets gracefully.

- Widget Animation: Implement engaging animations for widgets and enable drag-and-drop customization.

## DraggableWidget.js

`npm install react-spring react-dnd react-dnd-html5-backend
`
### Implement Drag-and-Drop:

```
const DraggableWidget = ({ widgetType }) => {
  const [, ref] = useDrag({
    type: 'WIDGET',
    item: { type: widgetType },
  });

  return (
    <div ref={ref} className="draggable-widget">
      {/* Your widget content */}
    </div>
  );
};

export default DraggableWidget;
```
### Implement Animations:
```
const AnimatedWidget = ({ widgetType }) => {
  const props = useSpring({
    // Animation properties
  });

  return (
    <animated.div className="animated-widget" style={props}>
      {/*  widget content */}
    </animated.div>
  );
};

export default AnimatedWidget;
```

### Implement Animations:

- Expanded Sidebar: Enhance the sidebar with additional features and icons for comprehensive navigation.

- Toggle light and dark themes using material-ui. 

```
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
```

# End of README
### Thank you for your time and considerations! I hope you enjoyed this project.
