import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// context
import SearchResultsProvider from "./context/SearchResultsProvider.tsx";
import CollectionsProvider from "./context/CollectionsProvider.tsx";
import { BrowserRouter } from "react-router";
// component
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchResultsProvider>
      <CollectionsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollectionsProvider>
    </SearchResultsProvider>
  </StrictMode>,
);
