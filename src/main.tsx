import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.css";
import App from "./App.tsx";
import { Navbar } from "./components/navbar.tsx";
import ComponentsPage from "./views/components.tsx";

const rute = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/components",
    element: <ComponentsPage />,
  },
];

export function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {rute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
);
