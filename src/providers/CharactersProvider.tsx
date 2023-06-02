import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactElement,
} from "react";
import { CharacterMap } from "../utils/character-util";

export const CharactersContext = createContext({});

export const useCharacters = () => {
  return useContext(CharactersContext);
};

export const CharactersProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [characters, setCharacters] = useState({} as CharacterMap);

  useEffect(() => {
    fetch("./resources/index_new/en/characters.json")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <CharactersContext.Provider value={characters}>
      {children}
    </CharactersContext.Provider>
  );
};
