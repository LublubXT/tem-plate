import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import Navbar from './components/navbar'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutHome } from "./routes/layouthome";
import { HeaderCodeArea } from "./components/HeaderCodeArea";
import { NavbarCodeArea } from "./components/NavbarCodeArea";
import { SimpleLayoutCodeArea } from "./components/SimpleLayoutCodeArea";
import AboutPage from "./routes/about";
import { GridLayoutCodeArea } from "./components/GridLayoutCodeArea";
import { ContactLayoutCodeArea } from "./components/ContactLayoutCodeArea";
import { FooterLayoutCodeArea } from "./components/FooterLayoutCodeArea";
import { ComponentHome } from "./routes/componenthome";
import { CardComponentCodeArea } from "./components/CardComponentCodeArea";
import { TemplateHome } from "./routes/templatehome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/layouts",
    element: <LayoutHome />,
  },
  {
    path: "/components",
    element: <ComponentHome />,
  },
  {
    path: "/layouts-navbars",
    element: <NavbarCodeArea />,
  },
  {
    path: "/layouts-headers",
    element: <HeaderCodeArea />,
  },
  {
    path: "/layouts-basic-layouts",
    element: <SimpleLayoutCodeArea />,
  },
  {
    path: "/layouts-grid-layouts",
    element: <GridLayoutCodeArea />,
  },
  {
    path: "/layouts-contact-layouts",
    element: <ContactLayoutCodeArea />,
  },
  {
    path: "/layouts-footer-layouts",
    element: <FooterLayoutCodeArea />,
  },
  {
    path: "/components-cards",
    element: <CardComponentCodeArea />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/templates",
    element: <TemplateHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
