import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./App.css";
import "./sig.css";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create root

root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
