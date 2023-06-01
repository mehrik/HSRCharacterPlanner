import characters from "../resources/index_new/en/characters.json";

export type Eidolons = {
  id: string;
  name: string;
  effect: string;
  icon: string;
};

export type Skill = {
  id: string;
  name: string;
  tag: string;
  max_level: number;
  effect: string;
  abridged_effect: string;
  element_type: string;
  icon: string;
};

export type Character = {
  id: string;
  name: string;
  rarity: string;
  element: string;
  eidolons: Eidolons[];
  skills: {
    basic_atk: Skill;
    skill: Skill;
    ultimate: Skill;
    talent: Skill;
    technique: Skill;
  };
  skills_tree: string[];
  icon: string;
  element_icon: string;
  path_icon: string;
  preview: string;
  portrait: string;
  character_overview: string;
  character_material: string;
};

const BLACKLIST_CHARACTERS = ["8001", "8002", "8003", "8004", "9100"];

export const CharacterUtil = {
  getAllCharacters(): Character[] {
    const keys = Object.keys(characters);
    return keys
      .map((key) => (characters as any)[key])
      .filter((character) => !BLACKLIST_CHARACTERS.includes(character.id));
  },
};
