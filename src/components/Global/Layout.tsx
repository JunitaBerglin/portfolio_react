import { PortfolioWrapper } from "../Home/Home.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <PortfolioWrapper>{children}</PortfolioWrapper>;
};
