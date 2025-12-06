export interface Project {
  id: number,
  created_at: Date,
  name: string,
  repo?: string,
  website?: string,
  description?: string,
  tags?: string[],
  media?: string[],
  short?: string,
  displayOrder: number
}