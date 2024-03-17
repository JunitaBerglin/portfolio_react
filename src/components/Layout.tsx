import StyledComponentsRegistry from "../../lib/registry";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  );
};
