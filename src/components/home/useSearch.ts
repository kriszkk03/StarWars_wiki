import { useState } from 'react';
import { ApiInstance } from '../../api/api';
import { SearchResult } from '../../api/types/searchResult';

type UseSearchProps = {
  history: { push: (url: string) => void };
};
type UseSearchResult = {
  handleSearch: (value: string) => void;
  error: boolean;
};
export function useSearch({ history }: UseSearchProps): UseSearchResult {
  const [error, setError] = useState(false);

  /**
   * depends on result give error ||  profile page || list the names with partial match
   * @param value user-typed input value
   */
  const handleSearch = async (value: string) => {
    const data = await ApiInstance.get<SearchResult>('people/?search=' + value);
    value.trim() === '' || data.data.count === 0
      ? setError(true)
      : data.data.count === 1
      ? history.push(`/profile/${value}`)
      : history.push(`/results/${value}`);
  };

  return { handleSearch, error };
}
