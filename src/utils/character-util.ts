import { Character } from "../types";

const BLACKLIST_CHARACTERS = ["8001", "8002", "8003", "8004", "9100"];

export const CharacterUtil = {
  formatcharacterList(characters: Record<string, Character>): Character[] {
    const keys = Object.keys(characters);
    return keys
      .map((key) => (characters as Record<string, Character>)[key])
      .filter((character) => !BLACKLIST_CHARACTERS.includes(character.id));
  },
};
