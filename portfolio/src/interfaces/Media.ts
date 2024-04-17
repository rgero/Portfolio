export interface Media {
  type: string;
  src: string;
  alt?: string;
  description?: string;
  width?: number;
  height?: number;
  poster?: string;
  imageFit?: ImageFit;
}

export type ImageFit = "contain" | "cover";