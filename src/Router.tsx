import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/styled/Layout";
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
