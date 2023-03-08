import { FC } from "react";
import { Typography } from "@mui/material";

interface ScoreProps {
  score: number;
}

export const Score: FC<ScoreProps> = ({ score }) => {
  return (
    <Typography
      component="h3"
      variant="h5"
      align="center"
      color="text.primary"
      gutterBottom
    >
      Score {score}/10
    </Typography>
  );
};