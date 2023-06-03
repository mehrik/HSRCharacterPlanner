type GuideEvaluation = {
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

export type CharactersMap = Record<string | number, Character>;

const BLACKLIST_CHARACTERS = ["8001", "8002", "8003", "8004", "9100"];

export const CharacterUtil = {
  formatCharactersList(characters: CharactersMap): Character[] {
    const keys = Object.keys(characters);
    return keys
      .map((key) => (characters as CharactersMap)[key])
      .filter((character) => !BLACKLIST_CHARACTERS.includes(character.id));
  },
};
