export type CountryData = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders: string[];
  nativeName: string;
  currencies: {
    name: string;
  }[];
  languages: {
    name: string;
  }[];
  flags: { svg: string; png: string };
};

export type ObjectWithParams = {
  [key: string]: unknown;
};
