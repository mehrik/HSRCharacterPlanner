import React, { createContext, useContext } from "react";
import CHARACTERS from "../config/en/characters.json";
import PATHS from "../config/en/paths.json";
import ELEMENTS from "../config/en/elements.json";
import CHARACTER_SKILLS from "../config/en/character_skills.json";

import { Path, Element, Skill, Character } from "../types";

import { CharacterUtil } from "../utils/character-util";

interface AppContextType {
  characterIndex: Record<string, Character>;
  characterList: Character[];
  paths: Record<string, Path>;
  elements: Record<string, Element>;
  characterSkills: Record<string, Skill>;
}

export const AppContext = createContext<AppContextType>({
  characterIndex: {},
  characterList: [],
  paths: {},
  elements: {},
  characterSkills: {},
});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const characterIndex = CHARACTERS as Record<
    keyof typeof CHARACTERS,
    Character
  >;
  const characterList = CharacterUtil.formatcharacterList(characterIndex);
  const paths = PATHS;
  const elements = ELEMENTS;
  const characterSkills = CHARACTER_SKILLS;

  return (
    <AppContext.Provider
      value={{
        characterIndex,
        characterList,
        paths,
        elements,
        characterSkills,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
