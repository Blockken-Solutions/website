export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
