import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScholarLens from "./ScholarLens.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScholarLens />
  </StrictMode>
);
