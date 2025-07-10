
import { useState } from "react";
import Question, { questions } from "./components/Questions";
import Result from "./components/Result";
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // stock reponse dans un tableau
  const handleAnswer = (personality) => {
    setAnswers([...answers, personality]);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  // compte combien de fois chaque categorie apparait
  const getResult = () => {
    const count = {};
    answers.forEach(p => {
      count[p] = (count[p] || 0) + 1;
    });
    // donne categorie dominante
    return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  };

  return (
    <div className="container">
      {!showResult ? (
        <Question
          question={questions[current]}
          currentQuestionIndex={current}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result personality={getResult()} />
      )}
    </div>
  );
}

export default App;