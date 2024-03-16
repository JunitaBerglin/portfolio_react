import StyledComponentsRegistry from "lib/registry";
import { PortfolioWrapper } from "@/Components/Home/Home.styles";
import { GlobalStyles } from "./global-styles/globalStyles";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PortfolioWrapper>
      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
    </PortfolioWrapper>
  );
};
