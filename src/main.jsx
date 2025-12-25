import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext"; // Pastikan import ini benar

// Font & Swiper tetap seperti sebelumnya...

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Bungkus App dengan LanguageProvider */}
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
);