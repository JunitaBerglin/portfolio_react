import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/index";
import PortfolioPage from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <PortfolioPage></PortfolioPage>,
        index: true,
      },
    ],
  },
]);
