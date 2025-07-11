import { useState } from "react";

function QuizContainer({ questions, QuestionComponent, ResultComponent, onBack }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedPersonalities) => {
        setAnswers([...answers, ...selectedPersonalities]);

        const next = current + 1;
        if (next < questions.length) {
        setCurrent(next);
        } else {
        setShowResult(true);
        }
    };

    const computeResults = () => {
        const count = {};
        answers.forEach((personality) => {
        count[personality] = (count[personality] || 0) + 1;
        });

        const total = answers.length;
        const results = Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .map(([personality, freq]) => ({
            personality,
            percentage: ((freq / total) * 100).toFixed(1),
        }));

        return results;
    };

    return (
        <div className="quiz-container">
        <button onClick={onBack} className="back-button">← Retour à l’accueil</button>

        {!showResult ? (
            <QuestionComponent
            question={questions[current]}
            onAnswer={handleAnswer}
            currentQuestionIndex={current}
            totalQuestions={questions.length}
            />
        ) : (
            <ResultComponent results={computeResults()} />
        )}
        </div>
    );
}

export default QuizContainer;