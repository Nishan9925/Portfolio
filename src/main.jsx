import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Service from "./pages/Service.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
        errorElement: <NotFoundPage />,
      },
      {
        path: "/service",
        element: <Service />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
