export type PortfolioImage = {
  url: string;
};

export type PortfolioProject = {
  name: string;
  image: PortfolioImage;
  description: string;
  projectId: number;
  slug: string;
};

export interface PortfolioProps {
  projectItems: PortfolioProject[];
}
