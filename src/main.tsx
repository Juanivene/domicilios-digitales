import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ViewAddresses from "./ViewAddresses";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ViewAddresses />
  </StrictMode>
);