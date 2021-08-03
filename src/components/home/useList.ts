import { useState, useEffect, useCallback } from 'react';
import { ApiInstance } from '../../api/api';
import { SearchResult } from '../../api/types/searchResult';

type UseListResult = {
  species: string[];
  loaded: boolean;
};

export function useList(): UseListResult {
  const [species, setSpecies] = useState(['']);
  const [loaded, setLoaded] = useState(false);

  /**
   * initialize a dropdown list of all species in starwars
   */
  const listSpecies = useCallback(async (endpoint: string, resultArray: string[]) => {
    const data = await ApiInstance.get<SearchResult>(endpoint);
    //  van egy üres page4 amin nem tudok végigiterálni!!
    if (data.data.results) {
      data.data.results.forEach((species) => {
        resultArray.push(species.name);
      });
    }
    if (data.data.next !== undefined) {
      listSpecies(data.data.next, resultArray);
    } else {
      setSpecies(resultArray);
      setLoaded(true);
    }
  }, []);
  // Kell itt a useEffect?
  useEffect(() => {
    listSpecies('/species/', []);
  }, [listSpecies]);
  return { species, loaded };
}
