import { useEffect, useState } from 'react';
import { ApiInstance } from '../../api/api';
import { SearchResult } from '../../api/types/searchResult';

type UseSearchNamesProps = {
  name: string;
};

type UseSearchNamesResult = {
  names: string[];
  loaded: boolean;
};

export const useSearchNames = ({ name }: UseSearchNamesProps): UseSearchNamesResult => {
  const [names, setNames] = useState(['']);
  const [loaded, setLoaded] = useState(false);

  const searchNames = async (name: string) => {
    const data = await ApiInstance.get<SearchResult>('people/?search=' + name);
    let resultArray: string[] = [];
    data.data.results.forEach((person) => {
      resultArray.push(person.name);
    });
    setNames(resultArray);
    setLoaded(true);
  };

  useEffect(() => {
    searchNames(name);
  }, [name]);

  return { names, loaded };
};
