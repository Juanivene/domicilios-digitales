import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ViewAddresses from "./ViewAddresses";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ViewAddresses />
    </QueryClientProvider>
  </StrictMode>
);
