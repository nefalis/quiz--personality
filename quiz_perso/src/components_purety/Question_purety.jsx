import { useState } from "react";

export const questions = [
    {
    text: "Ton rapport aux règles :",
    choices: [
        { text: "Je fais pire exprès.", personality: "Impur" },
        { text: "Je les respecte.", personality: "Sage" },
        { text: "Je m’adapte.", personality: "Équilibré" },
        { text: "Je joue avec.", personality: "Malicieux" },
        { text: "Je les enfreins quand ça m’arrange.", personality: "Rebelle" },
        { text: "Quelles règles ?", personality: "Chaotique" },
    ],
    },
    {
    text: "Quand on te propose un plan douteux :",
    choices: [
        { text: "Je suis déjà dedans.", personality: "Impur" },
        { text: "J’accepte.", personality: "Rebelle" },
        { text: "Je refuse.", personality: "Sage" },
        { text: "Je souris.", personality: "Malicieux" },
        { text: "Je l’améliore.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton historique de soirées ressemble à :",
    choices: [
        { text: "Un dossier classé X.", personality: "Impur" },
        { text: "Des dîners calmes.", personality: "Sage" },
        { text: "Des anecdotes gênantes.", personality: "Malicieux" },
        { text: "Des trous de mémoire.", personality: "Rebelle" },
        { text: "Un joyeux mélange.", personality: "Équilibré" },
        { text: "Des preuves supprimées.", personality: "Chaotique" },
    ],
    },
    {
    text: "Face à une tentation :",
    choices: [
        { text: "Ça dépend.", personality: "Équilibré" },
        { text: "Je teste un peu.", personality: "Malicieux" },
        { text: "Je fonce.", personality: "Rebelle" },
        { text: "Je fais pire.", personality: "Chaotique" },
        { text: "J’ai déjà cédé.", personality: "Impur" },
        { text: "Je résiste.", personality: "Sage" },
    ],
    },
    {
    text: "Ton rapport aux secrets :",
    choices: [
        { text: "Ils sont nombreux.", personality: "Impur" },
        { text: "Je n’en ai pas.", personality: "Sage" },
        { text: "Je m’en fiche.", personality: "Rebelle" },
        { text: "Certains restent.", personality: "Équilibré" },
        { text: "Ils finissent par sortir.", personality: "Malicieux" },
        { text: "Tout le monde sait déjà.", personality: "Chaotique" },
    ],
    },
    {
    text: "Quand quelqu’un te juge :",
    choices: [
        { text: "Je rigole.", personality: "Malicieux" },
        { text: "Je m’en fiche.", personality: "Rebelle" },
        { text: "Il aurait des raisons.", personality: "Impur" },
        { text: "Ça me touche.", personality: "Sage" },
        { text: "Je relativise.", personality: "Équilibré" },
        { text: "Je le provoque.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton rapport à l’alcool :",
    choices: [
        { text: "On a une histoire.", personality: "Impur" },
        { text: "Avec modération.", personality: "Sage" },
        { text: "Selon le contexte.", personality: "Équilibré" },
        { text: "Pour l’ambiance.", personality: "Malicieux" },
        { text: "Pour oublier.", personality: "Rebelle" },
        { text: "Pour voir.", personality: "Chaotique" },
    ],
    },
    {
    text: "Quand tu fais une bêtise :",
    choices: [
        { text: "J’en ris.", personality: "Malicieux" },
        { text: "J’assume totalement.", personality: "Impur" },
        { text: "Je culpabilise.", personality: "Sage" },
        { text: "Je relativise.", personality: "Équilibré" },
        { text: "Je recommence.", personality: "Rebelle" },
        { text: "Je fais pire.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton rapport au flirt :",
    choices: [
        { text: "C’est mon langage.", personality: "Impur" },
        { text: "Pour le fun.", personality: "Malicieux" },
        { text: "Sans retenue.", personality: "Rebelle" },
        { text: "Même sans le vouloir.", personality: "Chaotique" },
        { text: "Je suis mal à l’aise.", personality: "Sage" },
        { text: "Quand ça se présente.", personality: "Équilibré" },
    ],
    },
    {
    text: "Tu as déjà dit “je ne le referai plus” :",
    choices: [
        { text: "En sachant que si.", personality: "Impur" },
        { text: "Et je l’ai pensé.", personality: "Sage" },
        { text: "Et ça a tenu un temps.", personality: "Équilibré" },
        { text: "En souriant.", personality: "Malicieux" },
        { text: "Sans y croire.", personality: "Rebelle" },
        { text: "Juste avant de recommencer.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton téléphone, quelqu’un peut le prendre ?",
    choices: [
        { text: "Surtout pas.", personality: "Impur" },
        { text: "Après un tri rapide.", personality: "Malicieux" },
        { text: "Oui.", personality: "Sage" },
        { text: "Oui mais vite.", personality: "Équilibré" },
        { text: "Je m’en fiche.", personality: "Rebelle" },
        { text: "Bonne chance.", personality: "Chaotique" },
    ],
    },
    {
    text: "Quand l’ambiance dérape :",
    choices: [
        { text: "J’en rajoute.", personality: "Impur" },
        { text: "Je calme.", personality: "Sage" },
        { text: "Je regarde.", personality: "Équilibré" },
        { text: "Je pousse.", personality: "Rebelle" },
        { text: "Je déclenche.", personality: "Chaotique" },
        { text: "Je provoque un peu.", personality: "Malicieux" },

    ],
    },
    {
    text: "Ton rapport aux limites :",
    choices: [
        { text: "Quelles limites ?", personality: "Impur" },
        { text: "Elles sont importantes.", personality: "Sage" },
        { text: "Elles sont souples.", personality: "Équilibré" },
        { text: "Elles m’amusent.", personality: "Malicieux" },
        { text: "Je les dépasse.", personality: "Rebelle" },
        { text: "Je les détruis.", personality: "Chaotique" },
    ],
    },
    {
    text: "Si on racontait tout sur toi :",
    choices: [
        { text: "Ce serait long.", personality: "Impur" },
        { text: "Ce serait clean.", personality: "Sage" },
        { text: "Ce serait nuancé.", personality: "Équilibré" },
        { text: "Ce serait drôle.", personality: "Malicieux" },
        { text: "Ce serait gênant.", personality: "Rebelle" },
        { text: "Ce serait censuré.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton rapport aux défis stupides :",
    choices: [
        { text: "Je les propose.", personality: "Impur" },
        { text: "Je refuse.", personality: "Sage" },
        { text: "Pourquoi pas.", personality: "Équilibré" },
        { text: "Si tout le monde regarde.", personality: "Malicieux" },
        { text: "Toujours.", personality: "Rebelle" },
        { text: "Sans réfléchir.", personality: "Chaotique" },
    ],
    },
    {
    text: "Tu te définis plutôt comme :",
    choices: [
        { text: "Libre.", personality: "Rebelle" },
        { text: "Assumé·e.", personality: "Impur" },
        { text: "Raisonnable.", personality: "Sage" },
        { text: "Humain·e.", personality: "Équilibré" },
        { text: "Taquin·e.", personality: "Malicieux" },
        { text: "Imprévisible.", personality: "Chaotique" },
    ],
    },
    {
    text: "Quand tu repenses à ton passé :",
    choices: [
        { text: "Oups.", personality: "Impur" },
        { text: "Rien à signaler.", personality: "Sage" },
        { text: "Des choix.", personality: "Rebelle" },
        { text: "Des preuves à effacer.", personality: "Chaotique" },
        { text: "Des hauts et des bas.", personality: "Équilibré" },
        { text: "Des bons souvenirs.", personality: "Malicieux" },
    ],
    },
    {
    text: "Ta réaction face à l’ennui :",
    choices: [
        { text: "Je fais une connerie.", personality: "Impur" },
        { text: "Je change d’activité.", personality: "Équilibré" },
        { text: "Je provoque.", personality: "Malicieux" },
        { text: "Je m’occupe.", personality: "Sage" },
        { text: "Je pars.", personality: "Rebelle" },
        { text: "Je crée le chaos.", personality: "Chaotique" },
    ],
    },
    {
    text: "Ton rapport aux sous-entendus :",
    choices: [
    { text: "Je les adore.", personality: "Malicieux" },
    { text: "Je les provoque.", personality: "Rebelle" },
    { text: "Je vais trop loin.", personality: "Chaotique" },
    { text: "Je les comprends très bien.", personality: "Impur" },
    { text: "Je fais semblant de ne pas voir.", personality: "Sage" },
    { text: "Ça dépend de la situation.", personality: "Équilibré" },
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
