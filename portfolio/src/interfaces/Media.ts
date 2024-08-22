export interface Media {
  type?: string;
  src: string;
  alt?: string;
  title?: string;
  width?: number;
  height?: number;
  poster?: string;
  imageFit?: ImageFit;
}

export type ImageFit = "contain" | "cover";