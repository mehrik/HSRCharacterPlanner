import React, { createContext, useContext } from "react";
import CHARACTERS from "../config/en/characters.json";
import PATHS from "../config/en/paths.json";
import ELEMENTS from "../config/en/elements.json";

import {
  Character,
  CharactersMap,
  CharacterUtil,
} from "../utils/character-util";

type Path = {
  id: string;
  text: string;
  name: string;
  desc: string;
  icon: string;
};

type Element = {
  id: string;
  name: string;
  desc: string;
  color: string;
  icon: string;
};

interface AppContextType {
  charactersMap: CharactersMap;
  charactersList: Character[];
  paths: Record<string, Path>;
  elements: Record<string, Element>;
}

export const AppContext = createContext<AppContextType>({
  charactersMap: {},
  charactersList: [],
  paths: {},
  elements: {},
});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const charactersMap = CHARACTERS as Record<
    keyof typeof CHARACTERS,
    Character
  >;
  const charactersList = CharacterUtil.formatCharactersList(charactersMap);
  const paths = PATHS;
  const elements = ELEMENTS;

  return (
    <AppContext.Provider
      value={{ charactersMap, charactersList, paths, elements }}
    >
      {children}
    </AppContext.Provider>
  );
};
