Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
    'UCbkE0ZnzVq7MdEytAst1CLT3DGYlJiu8PZJmROd', // This is your Application ID
    'EEJNknvjKWg3FQ1rimBPSdM33zsiT1VZTyQmz2VY' // This is your Javascript key
);

const Skill = Parse.Object.extend("Skill");
const listaSkills = document.getElementById("listaSkills");


const lerSkills = async() => {
    const query = new Parse.Query(Skill);
    try {
        const results = await query.find();
        listaSkills.innerHTML = "";
        for (const Skill of results) {
            const descricao = Skill.get("descricao");
            const feita = Skill.get("feita");
            listaSkills.innerHTML += `${descricao}<br>`;
        }
    } catch (error) {
        console.error("Error while fetching Tarefa", error);
    }
    lerSkills();
};
lerSkills();
