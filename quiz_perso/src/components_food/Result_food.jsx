const descriptions = {
JunkFood: "Tu es le genre de personne qui met du fromage râpé partout. Le gras, c’est la vie, ce sont juste des points de plaisir.",
Healthy: "Tu lis les étiquettes des yaourts comme d’autres lisent des romans. Tu sais prononcer ‘quinoa’ correctement et ton blender te considère comme de la famille",
Aventurier: "Tu manges des trucs dont personne ne connaît le nom.",
Classique: "Pourquoi changer ce qui marche ?",
Welsh: "Tu vis pour le fromage fondu. Ton cœur est fait de cheddar, ta foi en la bière est inébranlable. Le pain détrempé est ta religion. Le cholestérol te salue bien !",
Troll: "Toi tu cherches la drouille !"
};

function Result({ personality }) {
return (
    <div className="result-card">
    <h2>Ton profil culinaire :</h2>
    <h3>{personality}</h3>
    <p>{descriptions[personality]}</p>
    </div>
);
}

export default Result;