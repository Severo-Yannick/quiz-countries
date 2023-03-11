import { FC, useEffect, useState } from "react";
import { NoMatch, Home } from "./pages/index"
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layout/index";
import { Capital, Country, Flag, Population } from "./components";
import { CountryType } from "./types/countryTypes";
import { countryContext } from "./contexts/Countries";

export const App: FC = () => {

  const [countries, setCountries] = useState<CountryType[]>([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((data: CountryType[]) => setCountries(data))
      .catch(error => console.error(error));
  }, [])

  return (
    <div>
      <Header />
      <countryContext.Provider value={countries}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="drapeau" element={<Flag />} />
          <Route path="pays" element={<Country />} />
          <Route path="capitale" element={<Capital />} />
          <Route path="population" element={<Population />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </countryContext.Provider>
      <Footer />
    </div>
  )
}
