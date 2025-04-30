export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  startDate: Date;
  endDate?: Date; // Optional for ongoing projects
  github?: string;
  demo?: string;
}
