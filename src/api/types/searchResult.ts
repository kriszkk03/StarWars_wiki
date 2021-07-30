import { URLString, Person } from './types';

export type SearchResult = {
  count: number;
  next: string;
  previous: URLString;
  results: Person[];
};
