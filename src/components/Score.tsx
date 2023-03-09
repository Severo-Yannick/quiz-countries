import { FC } from "react";
import { Typography } from "@mui/material";

interface ScoreProps {
  score: number;
  questionNumber: number;
}

export const Score: FC<ScoreProps> = ({ score, questionNumber }) => {
  return (
    <Typography
      component="h3"
      variant="h5"
      align="center"
      color="text.primary"
      gutterBottom
    >
      Score {score}/{questionNumber}
    </Typography>
  );
};