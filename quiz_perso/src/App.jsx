import { useState } from "react";
import Home from "./components/Home";
import QuizContainer from "./components/QuizContainer";

import QuestionPerso, { questions as persoQuestions } from "./components_perso/Questions";
import ResultPerso from "./components_perso/Result";

import QuestionFood, { questions as foodQuestions } from "./components_food/Question_food";
import ResultFood from "./components_food/Result_food";

import QuestionCat, { questions as catQuestions } from "./components_cat/Question_cat";
import ResultCat from "./components_cat/Result_cat";

import QuestionPurety, { questions as puretyQuestions } from "./components_purety/Question_purety";
import ResultPurety from "./components_purety/Result_purety";

import './App.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quizKey) => {
    setSelectedQuiz(quizKey);
  };

  const handleBackToHome = () => {
    setSelectedQuiz(null);
  };

  
  if (!selectedQuiz) {
    return <Home onSelectQuiz={handleSelectQuiz} />;
  }

  switch (selectedQuiz) {
    case "perso":
      return (
        <QuizContainer
          questions={persoQuestions}
          QuestionComponent={QuestionPerso}
          ResultComponent={ResultPerso}
          onBack={handleBackToHome}
        />
      );
    case "food":
      return (
        <QuizContainer
          questions={foodQuestions}
          QuestionComponent={QuestionFood}
          ResultComponent={ResultFood}
          onBack={handleBackToHome}
        />
      );
    case "cat":
      return (
        <QuizContainer
          questions={catQuestions}
          QuestionComponent={QuestionCat}
          ResultComponent={ResultCat}
          onBack={handleBackToHome}
        />
      );
      case "purety":
      return (
        <QuizContainer
          questions={puretyQuestions}
          QuestionComponent={QuestionPurety}
          ResultComponent={ResultPurety}
          onBack={handleBackToHome}
        />
      );
    default:
      return <Home onSelectQuiz={handleSelectQuiz} />;
  }
}

export default App;
