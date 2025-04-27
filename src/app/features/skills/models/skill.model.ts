export interface Skill {
  name: string;
  isPrimary?: boolean;
  icon?: any;
  simpleIcon?: string;
  level?: number;
  color?: string;
}

export interface SkillCategory {
  name: string;
  icon: any;
  skills: Skill[];
}
