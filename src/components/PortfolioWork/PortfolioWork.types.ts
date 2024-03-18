export type PortfolioImage = {
  url: string;
};

export type PortfolioProject = {
  name: string;
  image: PortfolioImage;
  description: string;
  projectId: number;
  githubName: string;
};

export interface PortfolioProps {
  projectItems: PortfolioProject[];
}
