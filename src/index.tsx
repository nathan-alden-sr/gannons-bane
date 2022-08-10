import React from "react";
import { createRoot } from "react-dom/client";
import _ from "lodash-es";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Disable console output in production
if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const container = document.getElementById("root");

if (_.isNil(container)) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
