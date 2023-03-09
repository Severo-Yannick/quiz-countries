import { createContext } from "react";
import { CountryType } from "../types/countryTypes";

export const countryContext = createContext<CountryType[]>([]);
