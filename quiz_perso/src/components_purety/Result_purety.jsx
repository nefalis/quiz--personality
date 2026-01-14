const descriptions = {
    Impur: "Tu es celui ou celle qui n’a jamais lu le manuel… et qui s’en porte très bien. Tout ce qui est interdit t’attire comme un aimant, et tu assumes tes choix avec un sourire coupable.",
    Sage: "Calme, posé·e et raisonnable. Tu es celui ou celle qu’on appelle quand tout part en vrille. La vie te suit sans trop de surprises… sauf quand tu cèdes à une petite folie secrète.",
    Équilibré: "Tu sais jongler entre fun et responsabilité. Tu peux être sage comme une image ou faire une petite bêtise, selon ton humeur. Bref, tu es le parfait compromis… mais un peu suspect quand même.",
    Malicieux: "Tu adores titiller les limites, sourire quand personne ne regarde, et provoquer un peu pour le plaisir. Tes amis savent que rien n’est jamais vraiment sûr avec toi… et ils adorent ça.",
    Rebelle: "Les règles sont des suggestions, et tu vis selon ton propre manuel. Tu sais ce que tu veux et tu ne te laisses pas marcher sur les pieds. Prépare-toi, l’ennui te fuit comme la peste.",
    Chaotique: "Tout le monde se demande ce que tu vas faire ensuite… et toi aussi. Ta vie est une suite de surprises, de petits désastres et de grands éclats de rire. On t’adore… ou on se méfie.",
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