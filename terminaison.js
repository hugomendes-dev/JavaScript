console.log("Exo 1 :")

let name = "Hugo"

for (let i = 1; i <= 10; i++) {
    console.log(name)
}

console.log("Exo 2 :")

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.log("Exo 3 :")

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Exo 4 :");

let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("Exo 5 :");

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("Exo 6 :");

let valeur = 10;
let somme = 0;

for (let i = 1; i <= valeur; i++) {
    somme = somme + i;
}

console.log("Somme = " + somme);

console.log("Exo 7 :");

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("Ordre inverse :");

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

let arrayCopy = [];

for (let i = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
}

console.log("Copie :");
console.log(arrayCopy);

console.log("Exo 8 :");

let arrayInverse = [];

for (let i = 0; i < array.length; i++) {
    arrayInverse[i] = array[array.length - 1 - i];
}

console.log(array);
console.log(arrayInverse);

console.log("Exo 9 :");

console.log("Supérieurs à 3 :");

for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
        console.log(array[i]);
    }
}

console.log("Pairs :");

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("Index pairs :");

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}

console.log("Impairs :");

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

console.log("Exo 10 :");

let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("Max = " + max);

console.log("Exo 11 :");

let min = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}

console.log("Min = " + min);

console.log("Exo 12 :");

let sommeTableau = 0;

for (let i = 0; i < array.length; i++) {
    sommeTableau = sommeTableau + array[i];
}

console.log("Moyenne = " + (sommeTableau / array.length));

console.log("Exo 13 :");

let tab1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let tab2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let tab3 = [];

for (let i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
}

console.log(tab3);

console.log("Exo 14 :");

let tab2Court = [-1, 12, 17, 14, 5, -9, 0, 18];
let tab3Diff = [];

for (let i = 0; i < tab1.length || i < tab2Court.length; i++) {
    let a = 0;
    let b = 0;
    if (i < tab1.length) {
        a = tab1[i];
    }
    if (i < tab2Court.length) {
        b = tab2Court[i];
    }
    tab3Diff[i] = a + b;
}

console.log(tab3Diff);

console.log("Exo 15 :");

let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];
let communs = 0;

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            communs = communs + 1;
        }
    }
}

console.log("Éléments en commun = " + communs);

console.log("Exo 16 :");

let tabFirstLast6 = [6, 1, 2, 3];
let resultat6 = tabFirstLast6.length >= 1 && (tabFirstLast6[0] === 6 || tabFirstLast6[tabFirstLast6.length - 1] === 6);

console.log("firstLast6 = " + resultat6);

console.log("Exo 17 :");

let tabFirstLast = [1, 2, 3, 1];
let resultatFirstLast = tabFirstLast.length >= 1 && tabFirstLast[0] === tabFirstLast[tabFirstLast.length - 1];

console.log("firstLast = " + resultatFirstLast);