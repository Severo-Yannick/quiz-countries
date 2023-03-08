import { FC } from "react";
import { Link } from "react-router-dom";

export const NoMatch: FC = () => {
  return (
    <div>
      <h1>Ooups... Page non trouvée</h1>
      <p>
        <Link to="/">Retour à la page d'accueil</Link>
      </p>
    </div>
  );
};