import { useState } from "react";

export const questions = [
{
    text: "Dans un open space, tu es plutôt...",
    choices: [
    { text: "Silencieux, concentré, efficace", personality: "Normal" },
    { text: "En train de raconter ton week-end à toute l'équipe", personality: "Pipelette" },
    { text: "Indigné par le bruit ambiant : 'on n'est pas dans un bar ici !'", personality: "Aigri" },
    { text: "En train de changer la sonnerie de l'imprimante pour un bruit de klaxon", personality: "Troll" },
    { text: "Tu surveilles que tout le monde a bien ses pauses légales", personality: "Rebel" },
    { text: "Tu souris sans comprendre toutes les blagues", personality: "Innocent" }
    ],
},
{
    text: "Tu trouves un chat dans la rue, que fais-tu ?",
    choices: [
    { text: "Tu le ramènes, tu l’aimes déjà", personality: "Innocent" },
    { text: "Tu commences à lui taper la discute et le ramènes", personality: "Pipelette" },
    { text: "Tu le regardes et tu dis : ‘Encore un squatteur’", personality: "Aigri" },
    { text: "Tu l'emmènes chez un véto pour qu'il retrouve son chez lui", personality: "Normal" },
    ],
},
{
    text: "Un débat éclate dans #général :",
    choices: [
        { text: "Tu postes un gif de pop-corn.", personality: "Troll" },
        { text: "Tu proposes de migrer la conversation vers #débats ou tu essaies de calmer le jeu.", personality: "Rebel" },
        { text: "Tu mutes le salon pour 8h minimum.", personality: "Aigri" },
        { text: "Tu lis tout mais tu dis rien.", personality: "Normal" },
        { text: "Tu participes même si tu n'es pas dans le truc", personality: "Pipelette" },
        { text: "Tu demandes ce qui se passe", personality: "Innocent" },
    ],
},
{
    text: "Sur ton mug au bureau, il y a quoi ? ",
    choices: [
    { text: "'Encore une réunion qui aurait pu être un mail'", personality: "Aigri" },
    { text: "Le logo d'un syndicat", personality: "Rebel" },
    { text: "'Je bois pour oublier les gens'", personality: "Troll" },
    { text: "'Tu sais que j’ai deux chats ?'", personality: "Pipelette" },
    { text: "Rien, il est blanc.", personality: "Normal" }
    ],
},
{
    text: "Tu es sur un serveur discord",
    choices: [
    { text: "Tu parles partout et toute la journée", personality: "Pipelette" },
    { text: "Tu fais des blagues et des sous entendu douteux.", personality: "Troll" },
    { text: "Tu n'aimes pas quand les sujets ne sont pas dans les bons salons ou trop de joie et de couleurs", personality: "Aigri" },
    { text: "Tu parles sérieusement sur les sujets que t'aime sans arriere pensé", personality: "Normal" },
    { text: "Tu fais un salon exprès pour aider ceux qui veulent lutter contre l'oppression et qui se font malmené", personality: "Rebel" },
    { text: "Tu découvres plein de chose et de pratique bizarre", personality: "Innocent" },
    ],
},
{
    text: "On ping un everyone ou here sur un serveur discord, tu réagis comment ?",
    choices: [
    { text: "Ouaiiisss un truc pour parler tous ensemble !!", personality: "Pipelette" },
    { text: "Tu t'amuses a ping plein de gens en plus", personality: "Troll" },
    { text: "Tu supprimes la notifications car tu n'aimes pas etre dérangé", personality: "Aigri" },
    { text: "Tu regardes juste la notification et tu regarderas plus tard ", personality: "Normal" },
    ],
},
{
    text: "Ton mot préféré dans une conversation ?",
    choices: [
        { text: "‘Genre’", personality: "Pipelette" },
        { text: "‘Techniquement’", personality: "Rebel" },
        { text: "‘Je ne connais pas’", personality: "Innocent" },
        { text: "‘Encore heureux’", personality: "Aigri" },
        { text: "‘Mouahahah’", personality: "Troll" },
        { text: "‘OK’", personality: "Normal" }
    ],
},
{
    text: "Un nouveau arrive sur le serveur :",
    choices: [
        { text: "Tu lui souhaite la bienvenue et t'essaies d'en savoir plus !", personality: "Pipelette" },
        { text: "Tu le ping publiquement pour voir s’il a lu les règles.", personality: "Rebel" },
        { text: "Tu l’ignores, comme tous les autres.", personality: "Aigri" },
        { text: "Tu fais une blague sur son pseudo dès son arrivée.", personality: "Troll" },
        { text: "Tu lui dis bonjour et tu t’en vas.", personality: "Normal" },
        { text: "Tu penses qu'il va peut-être devenir ton ami.", personality: "Innocent" },
        ],
},
{
    text: "Un admin fait une annonce :",
    choices: [
        { text: "Tu lis en diagonale et tu poses plein de question dessus.", personality: "Pipelette" },
        { text: "Tu analyses le message dans les détails", personality: "Rebel" },
        { text: "Tu ne lis même pas. Tu sais déjà que tu vas râler.", personality: "Aigri" },
        { text: "Tu mets un 👍 et tu retournes faire autre chose.", personality: "Normal" },
        { text: "Tu fais une blague sur le message.", personality: "Troll" },
    ],
},
{
    text: "Le salon vocal est plein :",
    choices: [
        { text: "Tu t'inscrutes sur le salon textuel du vocal meme si tu n'entends pas la conversation", personality: "Pipelette" },
        { text: "Tu ouvres un ticket pour demander plus de places.", personality: "Rebel" },
        { text: "Tu râles dans le général sur l’organisation.", personality: "Aigri" },
        { text: "Tu vas faire autre chose, tranquille.", personality: "Normal" },
        { text: "Tu rentres dans un autre vocal et tu lui donnes un nom troll", personality: "Troll" },
        { text: "Tu ne comprends pas pourquoi il y a une limite.", personality: "Innocent" },
    ],
},
{
    text: "Le serveur change de thème visuel :",
    choices: [
        { text: "Tu cries au scandale : c'était mieux avant.", personality: "Aigri" },
        { text: "Tu proposes 15 autres palettes de couleurs et 8 logos.", personality: "Rebel" },
        { text: "Tu t’extasies sur les emojis custom.", personality: "Pipelette" },
        { text: "Tu dis 'ah bon ?' et tu ne vois aucune différence.", personality: "Innocent" },
        { text: "Tu changes les noms de salons pour faire une blague.", personality: "Troll" },
        { text: "Tu trouves ça joli. Ça s’arrête là.", personality: "Normal" },
    ],
},
{
    text: "Un drama éclate entre membres :",
    choices: [
        { text: "Tu fais des piques discretes de temps en temps", personality: "Troll" },
        { text: "Tu interviens pour calmer les choses.", personality: "Rebel" },
        { text: "Tu râles : 'encore un serveur toxique…'", personality: "Aigri" },
        { text: "Tu restes loin de tout ça, peace and chill.", personality: "Normal" },
        { text: "Tu ne sais pas ce qui se passe.", personality: "Innocent" },
        { text: "Tu expliques à tout le monde ce qui se passe, même si personne ne t’a rien demandé.", personality: "Pipelette" },
    ],
},
{
    text: "Un bot lance une commande chelou :",
    choices: [
        { text: "Tu rigoles et tu testes toutes les commandes cachées.", personality: "Troll" },
        { text: "Tu te méfies. 'Encore un truc qui vole nos données…'", personality: "Aigri" },
        { text: "Tu tapes la commande et t’attends de voir.", personality: "Normal" },
        { text: "Tu demandes : ‘C’est quoi ce bot ?’", personality: "Innocent" },
    ],
},
{
    text: "Tu gagnes un rôle éphémère sur le serveur :",
    choices: [
        { text: "Tu l’exhibes dans chaque salon comme une médaille.", personality: "Pipelette" },
        { text: "Tu fais un jeu de mots douteux sur le rôle.", personality: "Troll" },
        { text: "Tu demandes s’il peut être mis en retrait.", personality: "Aigri" },
        { text: "Tu l’acceptes humblement.", personality: "Normal" },
        { text: "Tu l’utilises pour organiser une révolution.", personality: "Rebel" },
    ],
},
{
    text: "Le serveur a trop de salons :",
    choices: [
        { text: "Tu proposes un grand ménage.", personality: "Rebel" },
        { text: "Tu crées un salon pour parler des salons.", personality: "Troll" },
        { text: "Tu ignores 80% des canaux et ça te va très bien.", personality: "Normal" },
        { text: "Tu te plains que c’était mieux quand il y en avait 4.", personality: "Aigri" },
        { text: "Tu les explores un à un, fasciné.", personality: "Innocent" },
        { text: "Tu demandes toutes les explications sur chaque salon.", personality: "Pipelette" },
    ],
},
{
    text: "Un sondage est lancé sur le serveur :",
    choices: [
        { text: "Tu votes une réponse troll.", personality: "Troll" },
        { text: "Tu votes puis tu oublies complètement le résultat.", personality: "Normal" },
        { text: "Tu poses dix questions sur les implications du vote.", personality: "Pipelette" },
        { text: "Tu votes pour l'option 'je sais pas'.", personality: "Innocent" },
        { text: "Tu râles que personne ne t’a consulté avant.", personality: "Aigri" },
    ],
},
{
    text: "Tu as atteint le niveau 100 grâce au système d’XP :",
    choices: [
        { text: "Tu fais une fête !", personality: "Pipelette" },
        { text: "Tu demandes à ce que le système soit supprimé, maintenant que t’es au max.", personality: "Aigri" },
        { text: "Tu proposes de redistribuer ton XP à ceux qui en ont besoin.", personality: "Rebel" },
        { text: "Tu n’étais même pas au courant.", personality: "Normal" },
        { text: "Tu penses que tu peux débloquer une vraie récompense IRL.", personality: "Innocent" },
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