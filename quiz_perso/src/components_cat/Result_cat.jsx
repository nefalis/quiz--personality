const descriptions = {
    "Maine Coon": "Majestueux, imposant, mais ultra affectueux. Tu domines ton monde... avec douceur.",
    "Sphynx": "Tu es atypique, original·e, un peu dénudé·e, mais toujours au chaud dans le cœur des gens.",
    "Siamois": "Intelligent·e, bavard·e, tu veux tout savoir, tout commenter. On t'adore ou on te redoute.",
    "British Shorthair": "Chill, classe, et toujours digne. Tu observes plus que tu ne participes, mais quand tu miaules, on écoute.",
    "Bengal": "Aventurier·e, curieux·se, tu n’arrêtes jamais. L’ennui, tu ne connais pas.",
    "Persan": "Tu as besoin de calme, de coussins moelleux et de respect. Beaucoup de respect.",
};

function Result({ results }) {

    return (
        <div className="result-card">
        <h2>  Tu es :</h2>
        {results.map(({ personality, percentage }) => (
            <div key={personality} className="result-block">
            <h3>{personality} - {percentage}%</h3>
            <p>{descriptions[personality]}</p>
            </div>
        ))}
        </div>
    );
}

export default Result;