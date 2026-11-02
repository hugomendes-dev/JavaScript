let societe = {
    nom:"Google",
    siegeSociale:"Googleplex, Mountain View, California, United States",
    Fondateurs:[ 
        { nom: "Larry Page", naissance: "26/03/1973", lieu: "East Lansing, Michigan" },
        { nom: "Sergey Brin", naissance: "21/08/1973", lieu: "Moscou, Union Soviétique" },
    ],
    chAffaires:[
        {annee: "2008", cA:"16.49 Milliard"}, 
        {annee: "2012", cA: "37.97 Millard"}, 
        {annee:"2016", cA: "89.46 Millard"}, 
        {annee: "2018", cA: "136.2 Millard"},
        ]
};

for (let i = 0; i < societe.Fondateurs.length ; i++) {
    console.log(societe.Fondateurs[i].nom);
}

for (let i = 0; i < societe.chAffaires.length ; i++) {
    console.log(societe.chAffaires[i].annee + " : " + societe.chAffaires[i].cA);
}