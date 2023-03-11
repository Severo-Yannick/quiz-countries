export interface CountryType {
  translations: {
    fra: {
      official: string;
      common: string;
    }
  };
  capital: [string];
  region: string;
  subregion: string;
  population: string;
  flag: string;
  flags: {
    alt : string;
    png: string;
    svg: string;
  };
}
