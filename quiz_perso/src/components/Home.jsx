import React from "react";
import './Home.css';


function Home({ onSelectQuiz }) {
    return (
        <div className="container">
        <h1>Bienvenue !</h1>
        <p>Choisissez votre quiz :</p>
        <div className="quiz-selection">
            <button onClick={() => onSelectQuiz("perso")}>Quiz Personnalité</button>
            <button onClick={() => onSelectQuiz("food")}>Quiz Nourriture</button>
            <button onClick={() => onSelectQuiz("cat")}>Quiz Chat</button>
        </div>
        </div>
    );
}

export default Home;