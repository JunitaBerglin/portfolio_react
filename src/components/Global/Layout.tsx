import StyledComponentsRegistry from "lib/registry";
import { PortfolioWrapper } from "@/Components/Home/Home.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PortfolioWrapper>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </PortfolioWrapper>
  );
};
