import { Image } from './Image'

export interface Project {
  id: number,
  name: string,
  repo: string,
  website: string,
  images: Image[],
  tags: string[],
  description: string
}