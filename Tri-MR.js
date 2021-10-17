#! node
/* Permet de trier les nombres passés en argument de façon décroissante */

// Transformation Tableau de String en Tableau de Nombre
process.argv.shift(process.argv[0]); process.argv.shift(process.argv[1]);

let argString = process.argv;
let argNumber = [];

for (x = 0; x < argString.length; x++) {
argNumber[x] = parseInt(argString[x]);
}
// Fin Transformation

let arg = argNumber;
let tab = [];

let i = 0;
let j = 0;

while(arg.length != tab.length) {
    if ((arg[i] >= tab[j]) || (tab[j] == undefined))  {
      tab.splice(j, 0, arg[i]);
      i++;
      j = 0;
    } else {
      j++;
    }
}

console.log(tab);
