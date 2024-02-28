import {Media} from './Media'

export interface Project {
  id: number,
  name: string,
  repo: string,
  website: string,
  media: Media[],
  tags: string[],
  description: string
}