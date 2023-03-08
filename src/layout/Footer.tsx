import { FC } from "react";
import { Typography, Link } from "@mui/material";

export const Footer: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://faceaucode.com/" target="blank">
        Crée avec &#x2764;&#xFE0F; by FaceAuCode 
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};