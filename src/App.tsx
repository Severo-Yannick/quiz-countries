import { NoMatch, Home } from "./pages/index"
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layout/index";
import { Capital, Country, Flag, Population } from "./components";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="drapeau" element={<Flag />} />
        <Route path="pays" element={<Country />} />
        <Route path="capitale" element={<Capital />} />
        <Route path="population" element={<Population />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  )
}
