import { FC, useState, useContext } from "react";
import { QuizCard } from "./QuizCard";
import { countryContext } from "../contexts/Countries";
import { formattedNumber } from "../utils/formatedNumber";
import { Typography } from "@mui/material";

export const Population: FC = () => {
  const countries = useContext(countryContext);
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)
  const randomNumber = Math.floor(Math.random() * 251);
  const country = countries[randomNumber]
  const population = formattedNumber(country?.population)

  const handleResponse = (response: boolean) => {
    if (response) {
      setScore(prev => prev + 1)
    }
    setQuestionNumber(prev => prev + 1)
  }

  const quizQuestion = () => (`La Population est de ${population} habitants ?`)

  return (
      <QuizCard quizName={"Population"} score={score} questionNumber={questionNumber} handleResponse={handleResponse} quizQuestion={quizQuestion} country={country?.translations?.fra?.common} flag={country?.flag} />
  );
};
