import { useState } from "react";
import DynamicRoutes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = DynamicRoutes();
  return useRoutes(routes);
}

export default App;
