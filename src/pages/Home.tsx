import { FC } from "react";
import { Container, Typography } from "@mui/material";

export const Home: FC = () => {
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
        Quiz Countries est une application web qui teste vos connaissances sur les différents pays du monde.
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Elle comporte des questions sur les capitales, les drapeaux, les langues et bien d'autres aspects intéressants de chaque pays.
      </Typography>
    </Container>
  );
};