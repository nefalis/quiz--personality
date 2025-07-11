const descriptions = {
Innocent: "Tu es Innocent. Tu prends tout au premier degré, avec un regard naïf et sincère sur le monde. Les sous-entendus te passent au-dessus de la tête, et les trucs bizarres des autres te laissent souvent perplexe. Tu ne vois pas le mal, et c’est probablement pour ça qu’on t’adore (ou qu’on te troll un peu). Ton monde est simple, pur, et étrangement rassurant.",
Troll: "Tu es un vrai Troll. Pas le genre à habiter sous un pont, non. Tu adores taquiner, provoquer gentiment, et semer la confusion juste pour voir les réactions. Tu es le maître des blagues douteuses, des commentaires décalés et des réponses qui laissent les gens hésiter entre rire et lever les yeux au ciel.",
Aigri: "Tu es Aigri. Le bonheur des autres t’agace un peu (beaucoup), surtout quand il est trop bruyant, trop coloré, trop... enthousiaste. Les arcs-en-ciel, les confettis et les gens qui sourient à 7h du matin ? Très peu pour toi. ",
Pipelette: "Tu es une Pipelette ! Toujours en train de discuter, de commenter, de raconter. Tu peux passer 8h à bosser… tout en tenant une conversation ininterrompue. Tu es partout, au courant de tout, et surtout : tu parles. Beaucoup. Mais bizarrement, tu arrives quand même à faire ton travail. ",
Rebel: "Tu es un Rebel ! Tu détestes l’injustice, les abus de pouvoir, et les règles absurdes. Sauf que toi, tu connais très bien les règles – ce qui te permet de mieux les contourner (ou les faire respecter quand ça t’arrange). Tu te bats pour ce qui est juste, tu n’hésites pas à t’exprimer haut et fort, et tu es souvent la voix de ceux qu’on n’entend pas. Tu n’es pas contre l’ordre, mais tu veux qu’il soit équitable. Et tu ne lâches jamais l’affaire.",
Normal: "Tu es Normal, dans un monde où tout le monde semble un peu bizarre. Tu ne cries pas, tu ne trolles pas, tu ne parles pas trop, tu n’es ni trop naïf, ni trop révolté. Tu fais les choses bien, à ton rythme, et tu ne cherches pas à te démarquer à tout prix. Mais c’est justement ça qui te rend spécial : tu es le point d’équilibre dans ce cirque ambiant. Un repère stable au milieu du chaos. "
};

function Result({ results }) {

    return (
        <div className="result-card">
        <h2>Ton profil  :</h2>
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