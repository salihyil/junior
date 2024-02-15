import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "./context/main";
import "./index.css";
import { ApolloWrapper } from "./lib/apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterProvider>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </FilterProvider>
  </React.StrictMode>
);
