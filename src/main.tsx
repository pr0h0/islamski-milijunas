import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter as Router } from "react-router-dom";

import App from "./App.tsx";
import { AppProvider } from "./utils/Context/AppContext.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
