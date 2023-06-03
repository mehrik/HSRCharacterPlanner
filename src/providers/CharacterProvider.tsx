import React, { createContext, useContext, useState } from "react";

import { Character } from "../utils/character-util";

export interface CharacterContextType {
  character: Character | null;
  setCharacter: React.Dispatch<React.SetStateAction<Character | null>>;
}

const defaultState = {
  character: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCharacter: (character: Character) => {},
} as CharacterContextType;

export const CharacterContext = createContext(defaultState);

export const useCharacter = () => {
  return useContext(CharacterContext);
};

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [character, setCharacter] = useState<Character | null>(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
