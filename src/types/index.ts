export type Path = {
  id: string;
  text: string;
  name: string;
  desc: string;
  icon: string;
};

export type Element = {
  id: string;
  name: string;
  desc: string;
  color: string;
  icon: string;
};

export type Skill = {
  id: string;
  name: string;
  max_level: number;
  element: string;
  type: string;
  type_text: string;
  effect: string;
  effect_text: string;
  simple_desc: string;
  desc: string;
  params: number[][];
  icon: string;
};

export type GuideEvaluation = {
  image: string;
  link: string;
};

export type Character = {
  element: string;
  guide_evaluation: GuideEvaluation[];
  guide_material: string[];
  guide_overview: string[];
  icon: string;
  id: string;
  max_sp: number;
  name: string;
  path: string;
  portrait: string;
  preview: string;
  ranks: string[];
  rarity: number;
  skill_trees: string[];
  skills: string[];
  tag: string;
};

export type characterIndex = Record<string | number, Character>;
