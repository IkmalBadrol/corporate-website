import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/corporate-website">
      <Routes>
        {/* Default page → HomePage (Aurora) */}
        <Route path="/" element={<HomePage />} />

        {/* Old starter page */}
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
