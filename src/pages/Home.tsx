import { FC } from "react";
import { Container, Typography, Button } from "@mui/material";
import { QUIZZES } from "../utils/constants";
import { useContext } from 'react';
import { countryContext } from '../contexts/Countries';

export const Home: FC = () => {

  const countries = useContext(countryContext);
  const numberOfCountries = countries && countries.length ? countries.length : "250"

  return (
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Quiz Countries
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Quiz Countries est une application web qui teste vos connaissances sur les {numberOfCountries} pays du monde.
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Elle comporte des questions sur les capitales, les drapeaux, les langues et bien d'autres aspects intéressants de chaque pays.
      </Typography>
      <Typography align="center" sx={{ marginTop: 3 }}>
        {QUIZZES.map(quiz => <Button key={quiz} href={`/${quiz}`}>{quiz}</Button>)}
      </Typography>
    </Container>
  );
};