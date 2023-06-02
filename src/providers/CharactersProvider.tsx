import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement,
} from "react";
import { Character, CharacterUtil } from "../utils/character-util";

export const CharactersContext = createContext<Character[]>([]);

export const useCharacters = () => {
  return useContext(CharactersContext);
};

export const CharactersProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [characters, setCharacters] = useState([] as Character[]);

  useEffect(() => {
    fetch("./resources/index_new/en/characters.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(CharacterUtil.getAllCharacters(data));
      });
  }, []);

  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  );
};
