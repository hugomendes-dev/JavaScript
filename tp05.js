console.log("Exo 1 :");

function constante() {
    return 33;
}

console.log(constante());

console.log("Exo 2 :");

function bonjour(prenom) {
    console.log("Bonjour " + prenom);
}

bonjour("Marcel");

console.log("Exo 3 :");

function calcul(a, b) {
    return a * b + a + b;
}

console.log(calcul(2, 3));
console.log(calcul("2", "3"));

console.log("Exo 4 :");

function moyenne(tab) {
    if (tab.length === 0) {
        return 0;
    }
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        if (typeof tab[i] !== "number") {
            return "Erreur : le tableau contient un élément qui n'est pas un nombre";
        }
        somme = somme + tab[i];
    }
    return somme / tab.length;
}

console.log(moyenne([10, 15, 20]));
console.log(moyenne([]));
console.log(moyenne("Bonjour"));

console.log("Exo 5 :");

function operations(a, b) {
    let resultat = {
        somme: a + b,
        soustraction: a - b,
        multiplication: a * b,
        division: a / b
    };
    return resultat;
}

console.log(operations(10, 2));