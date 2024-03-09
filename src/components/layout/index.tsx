import React from "react";
import { Outlet } from "react-router-dom";
import PortfolioPage from "..";

export const Layout = () => {
  return (
    <div>
      <PortfolioPage />
      {/* Content area where page-specific content will be rendered */}
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};