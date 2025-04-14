import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "./index.css";
import App from "./App.tsx";

injectSpeedInsights();
inject();

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <App />
   </StrictMode>
);
