const descriptions = {
    Impur: "Tu assumes. Vraiment. Ton niveau de pureté est une rumeur lointaine.",
    Sage: "Calme, réfléchi·e, raisonnable. Tu es la personne qu’on appelle quand tout part en vrille.",
    Équilibré: "Tu sais t’amuser sans perdre le contrôle. Rare. Presque suspect.",
    Malicieux: "Tu aimes flirter avec la limite, sans toujours la dépasser. Enfin… pas toujours.",
    Rebelle: "Les règles sont des suggestions. Et tu vis très bien avec cette idée.",
    Chaotique: "Personne ne sait ce que tu vas faire. Parfois, même pas toi.",
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