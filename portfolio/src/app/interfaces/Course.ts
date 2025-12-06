export interface Course {
  id: number,
  created_at: Date,
  name: string,
  repo: string,
  website: string,
  description: string,
  tags: string[],
  media?: string[],
  short: string,
  displayOrder: number,
  status: number,
  completed_date: Date,
  start_date: Date,
  source: string
}