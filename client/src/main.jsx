import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransactionsProvider } from "./Context/TransactionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);