import { FC, useState } from "react";
import { QuizCard } from "./QuizCard";

export const Population: FC = () => {
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)
  const handleResponse = (response: boolean) => {
    if (response) {
      setScore(prev => prev + 1)
    }
    setQuestionNumber(prev => prev + 1)
  }

  return (
    <QuizCard quizName={"Population"} score={score} questionNumber={questionNumber} handleResponse={handleResponse}/>
  );
};
