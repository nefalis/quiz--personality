import React, { useState } from "react";

function QuizContainer({ questions, ResultComponent, QuestionComponent, onBack }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (personality) => {
        setAnswers([...answers, personality]);
        const next = current + 1;
        if (next < questions.length) {
        setCurrent(next);
        } else {
        setShowResult(true);
        }
    };

    const getResult = () => {
    const count = {};
    answers.forEach((p) => {
        count[p] = (count[p] || 0) + 1;
        });
        return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    };

    return (
        <div className="container">
        <button className="back-button" onClick={onBack}>← Retour à l'accueil</button>

        {!showResult ? (
            <QuestionComponent
            question={questions[current]}
            currentQuestionIndex={current}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            />
        ) : (
            <ResultComponent personality={getResult()} />
        )}
        </div>
    );
}

export default QuizContainer;