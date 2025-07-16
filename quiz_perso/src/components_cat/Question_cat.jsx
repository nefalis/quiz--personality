import { useState } from "react";

export const questions = [
    {
        text: "Ton dimanche idéal ?",
        choices: [
        { text: "Câlins + sieste = bonheur.", personality: "Maine Coon" },
        { text: "Un musée, un podcast bizarre et une recette chelou.", personality: "Sphynx" },
        { text: "Un brunch puis 3h de débat entre amis.", personality: "Siamois" },
        { text: "Un plaid, un thé, un silence total.", personality: "British Shorthair" },
        { text: "Grimper un arbre, courir, sauter, explorer !", personality: "Bengal" },
        { text: "Rester chez moi à me faire chouchouter.", personality: "Persan" },
        ],
    },
    {
        text: "À une fête, on te trouve plutôt :",
        choices: [
        { text: "En train de réconforter quelqu’un.", personality: "Maine Coon" },
        { text: "En train de tester un cocktail inconnu.", personality: "Sphynx" },
        { text: "Au centre de la discussion, évidemment.", personality: "Siamois" },
        { text: "Dans un coin, mais avec une présence élégante.", personality: "British Shorthair" },
        { text: "Sur la piste de danse, évidemment.", personality: "Bengal" },
        { text: "Sur le canapé, avec une part de gâteau.", personality: "Persan" },
        ],
    },
    {
        text: "Comment gères-tu les conflits ?",
        choices: [
        { text: "Je calme les tensions, je rassure.", personality: "Maine Coon" },
        { text: "Je propose des solutions créatives.", personality: "Sphynx" },
        { text: "Je parle, beaucoup, pour que tout le monde comprenne.", personality: "Siamois" },
        { text: "Je prends de la distance, c’est mieux.", personality: "British Shorthair" },
        { text: "Je fuis... dans la forêt s’il le faut.", personality: "Bengal" },
        { text: "Je coupe le son et je m’allonge.", personality: "Persan" },
        ],
    },
    {
        text: "Quel objet te représente le plus ?",
        choices: [
        { text: "Un plaid géant", personality: "Persan" },
        { text: "Un talkie-walkie", personality: "Siamois" },
        { text: "Un hamac suspendu", personality: "British Shorthair" },
        { text: "Un sac de randonnée", personality: "Bengal" },
        { text: "Une boîte à câlins", personality: "Maine Coon" },
        { text: "Une lampe en forme de poulpe", personality: "Sphynx" },
        ],
    },
    {
        text: "Ta plus grande qualité selon tes amis ?",
        choices: [
        { text: "Je suis toujours là pour eux.", personality: "Maine Coon" },
        { text: "Je surprends tout le temps.", personality: "Sphynx" },
        { text: "Je sais exprimer ce que je ressens.", personality: "Siamois" },
        { text: "Je suis posé·e et fiable.", personality: "British Shorthair" },
        { text: "Je donne envie de bouger !", personality: "Bengal" },
        { text: "Je crée du confort et du calme.", personality: "Persan" },
        ],
    },
    {
        text: "Comment tu dors ?",
        choices: [
        { text: "Collé·e à quelqu’un ou quelque chose.", personality: "Maine Coon" },
        { text: "En boule sous une couverture chauffante.", personality: "Persan" },
        { text: "À plat, comme un sphynx antique.", personality: "Sphynx" },
        { text: "Discrètement, dans un coin de la pièce.", personality: "British Shorthair" },
        { text: "Je bouge toute la nuit.", personality: "Bengal" },
        { text: "En pensant à la conversation du lendemain.", personality: "Siamois" },
        ],
    },
    {
        text: "Un nouveau lieu, tu fais quoi ?",
        choices: [
        { text: "Je fais le tour, je renifle tout.", personality: "Bengal" },
        { text: "Je trouve direct un canapé.", personality: "Persan" },
        { text: "Je parle à tout le monde.", personality: "Siamois" },
        { text: "Je repère les issues et les coins calmes.", personality: "British Shorthair" },
        { text: "Je m’installe avec grâce au centre.", personality: "Maine Coon" },
        { text: "Je me cache sous une table en attendant d’observer.", personality: "Sphynx" },
        ],
    },
    {
        text: "Ton style vestimentaire ?",
        choices: [
        { text: "Chic, sobre, intemporel", personality: "British Shorthair" },
        { text: "Coloré, fun, inattendu", personality: "Sphynx" },
        { text: "Confort avant tout", personality: "Persan" },
        { text: "Prêt à l’aventure !", personality: "Bengal" },
        { text: "Stylé mais accessible", personality: "Maine Coon" },
        { text: "Exprime mes opinions", personality: "Siamois" },
        ],
    },
    {
        text: "Si tu étais une appli ?",
        choices: [
        { text: "Spotify (pour raconter mon mood)", personality: "Siamois" },
        { text: "Maps (toujours en vadrouille)", personality: "Bengal" },
        { text: "Calm (zen et moelleux)", personality: "Persan" },
        { text: "Pinterest (trop de trucs chelous)", personality: "Sphynx" },
        { text: "Slack (je veille sur tout le monde)", personality: "Maine Coon" },
        { text: "Kindle (lecture solo, silence total)", personality: "British Shorthair" },
        ],
    },
    {
        text: "Tu es face à une boîte mystérieuse :",
        choices: [
        { text: "Je rentre dedans sans réfléchir.", personality: "Persan" },
        { text: "Je l’ouvre et j’essaie tous les boutons.", personality: "Sphynx" },
        { text: "Je demande aux autres ce qu’ils en pensent.", personality: "Siamois" },
        { text: "Je la renifle puis je pars.", personality: "British Shorthair" },
        { text: "Je cours autour pour la déclencher.", personality: "Bengal" },
        { text: "Je regarde d’un air protecteur au cas où.", personality: "Maine Coon" },
        ],
    },
    {
        text: "Quel est ton café préféré ?",
        choices: [
        { text: "Un cappuccino moelleux avec beaucoup de mousse.", personality: "Persan" },
        { text: "Un expresso qui réveille.", personality: "Bengal" },
        { text: "Un café filtre, pas de chichi.", personality: "British Shorthair" },
        { text: "Un café glacé au lait d’avoine vanillé.", personality: "Sphynx" },
        { text: "Un latte en terrasse avec des amis.", personality: "Siamois" },
        { text: "Un chocolat chaud partagé avec quelqu’un.", personality: "Maine Coon" },
        ],
    },
    {
        text: "Un chaton s’approche de toi, tu fais quoi ?",
        choices: [
        { text: "Je le couvre d’amour.", personality: "Maine Coon" },
        { text: "Je l’observe, curieux.", personality: "British Shorthair" },
        { text: "Je lui parle direct !", personality: "Siamois" },
        { text: "Je lui propose un jeu.", personality: "Bengal" },
        { text: "Je lui présente mon doudou préféré.", personality: "Persan" },
        { text: "Je lui montre une app pour apprendre à miauler.", personality: "Sphynx" },
        ],
    },
    {
        text: "Tu vis dans quelle maison idéale ?",
        choices: [
        { text: "Un grand chalet avec cheminée", personality: "Maine Coon" },
        { text: "Un loft arty en centre-ville", personality: "Sphynx" },
        { text: "Un appart cosy au 5e étage sans ascenseur", personality: "Siamois" },
        { text: "Une maison zen avec peu de meubles", personality: "British Shorthair" },
        { text: "Une cabane perchée dans un arbre", personality: "Bengal" },
        { text: "Un manoir avec 14 coussins", personality: "Persan" },
        ],
    },
    {
        text: "Tu deviens célèbre, pourquoi ?",
        choices: [
        { text: "J’ai sauvé des chatons dans une tempête.", personality: "Maine Coon" },
        { text: "J’ai révolutionné les chaussettes pour chats.", personality: "Sphynx" },
        { text: "J’ai lancé un podcast félin à succès.", personality: "Siamois" },
        { text: "J’ai juste vécu tranquille, ça suffit.", personality: "British Shorthair" },
        { text: "J’ai couru 42 km pour la science.", personality: "Bengal" },
        { text: "J’ai dormi pendant 30h en live.", personality: "Persan" },
        ],
    },
];

function Question({ question, onAnswer, currentQuestionIndex, totalQuestions }) {
    const [selectedChoices, setSelectedChoices] = useState([]);

    const toggleChoice = (personality) => {
        setSelectedChoices(prev =>
        prev.includes(personality)
            ? prev.filter(p => p !== personality)
            : [...prev, personality]
        );
    };

    const handleSubmit = () => {
        if (selectedChoices.length === 0) return;
        onAnswer(selectedChoices);
        setSelectedChoices([]);
    };

    return (
        <div className="question-card">
        <p>
            Question {currentQuestionIndex + 1} / {totalQuestions}
        </p>
        <h2>{question.text}</h2>
        <ul>
            {question.choices.map((choice, index) => (
            <li key={index}>
                <label className="choice-item">
                <input
                    type="checkbox"
                    checked={selectedChoices.includes(choice.personality)}
                    onChange={() => toggleChoice(choice.personality)}
                />
                {choice.text}
                </label>
            </li>
            ))}
        </ul>
        <button
            onClick={handleSubmit}
            className={`choice-button validate-button ${selectedChoices.length === 0 ? 'disabled' : ''}`}
            disabled={selectedChoices.length === 0}
        >
            Valider
        </button>
        </div>
    );
}

export default Question;
