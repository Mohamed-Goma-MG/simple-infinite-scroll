// === Style === //
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const start = performance.now();

const root = document.getElementById("main-page") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const end = performance.now();

console.log(end - start);
