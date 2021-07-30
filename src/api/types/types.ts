export type Person = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: URLString;
  films: URLStringArray;
  species: URLStringArray;
  vehicles: URLStringArray;
  starships: URLStringArray;
  created: string;
  edited: string;
  url: URLString;
};
export type URLStringArray = string[];
export type URLString = string;

export type Species = {
  name: string;
  classification: string;
  designation: string;
  avarage_height: string;
  avarage_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: URLString;
  people: URLStringArray;
  films: URLStringArray;
  url: URLString;
  created: string;
  edited: string;
};

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: URLStringArray;
  films: URLStringArray;
  created: string;
  edited: string;
  url: URLString;
};

export type FilmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  relase_date: string;
  characters: URLStringArray;
  planets: URLStringArray;
  starships: URLStringArray;
  vehicles: URLStringArray;
  species: URLStringArray;
  created: string;
  edited: string;
  url: URLString;
};

export type SpeciesType = {
  name: string;
  classification: string;
  designation: string;
  avarage_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  avarage_lifespan: string;
  homeworld: URLString;
  language: string;
  people: URLStringArray;
  films: URLStringArray;
  created: string;
  edited: string;
  url: URLString;
};
