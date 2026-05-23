export type MediaItem = {
  type: "image" | "video";
  src: string;
};

export type PortfolioItem = {
  id: string;
  name: string;
  short: string;
  description: string;
  tags: string[];
  repo: string;
  website: string;
  media: MediaItem[];
  displayOrder: number;
};

export type Course = PortfolioItem & {
  status: number;
};

export type Project = PortfolioItem;
