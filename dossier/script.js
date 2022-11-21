// ligne un ce trouve un message d'erreur 

/*var donner

var prenom = "youssef"; console.log(prenom);

var calcul = 3 != 10; var phrase = "bla blou barlou le javascript c\'est sérieux  "
console.log(typeof calcul 
    , phrase)

var a = b = c = d = "salut ça va"
console.log(a,b,c,d)

// Exercice 4 : 

// Répondez aux questions suivantes : 

// Qu'est-ce qu'un langage typé dynamiquement ? 

// Qu'est-ce qu'un langage typé statiquement ? 

// Quelles sont leurs différences ? 

// Qu'est-ce qu'une variable ? une variables permet d'attribuer et enregistré une valeurs dans l'éditeur de code.

// Qu'est-ce qu'un type ? un type permet de différencier les valeurs enregistré boléen(vrai ou faux), string(chaine de caractère "a, b, c") et numbers(nombre et nombre à virgule)

var distance = 1000 ;
var temps = 60 ; 
var vitesse = distance / temps 
console.log("votre vitesse est de :",  vitesse, "km");


// exo 6 :
var a = 6; var b = 2 ; var result =  a % b ;
console.log(result)

// exo 7 :
var pseudo = "menbas"
console.log(typeof pseudo)

// Exercice 8 :
// Faire une concaténation de trois chiffres chacun préalablement stockés dans une variable avec la chaine de caractère "lol"
// Attendu : "5 8 3 lol"


var nb1 = 5; nb2 = 8; nb3 = 3 ; lol = "lol"
console.log(nb1 + " " + nb2 + " " + nb3 + " " + lol)

// Exercice 9 :
// Commentez en utilisant les bons termes ce que font ces instructions :
// var a = 250; 
// var b, c, d;
// b = c = d = a;
// b = b + " papa est en haut ";
// b += " maman est en bas";

// Exercice 10 :
// Créez une variable de type chaine de caractère (string). Affectez-lui une valeur "25".
// Convertissez la chaine de caractère 25 en nombre entier. Assurez-vous qu'elle soit bien convertie en nombre entier en demandant son type


var car = "25"
console.log(car)
parseInt(car)
console.log(typeof car)

if ( 5 < 7) {
    console.log("vrai")
} */

/* var age = 2;

if(age >= 18) {
    console.log("vous pouvez conduire")
} else if( age > 0 && age< 18) {
    console.log("vous ne pouvez pas conduire")
}

switch(age) {
    case 1 :
        console.log('petit')
        break;
    case 2 :
        console.log('egal')
        break;
    default:
        console.log("trop grand")
        break;
} */

/*
// exo 1 condition
var ages = prompt("Quels âges avez vous ?")

if (ages >= 18 ) {
    alert("vous pouvez rentrez !")
} else {
    alert("vous ne pouvez pas rentrez car vous n'etes pas majeurs")
}



// exo 2 condition
var nombres = prompt("Entrez une nombres entre")

if (nombres > 0) {
    alert("vous avez un nombre positifs")
} else if( nombres = 0) {
    alert('vous avez choisi un chiffre non valide')
} else {
    alert("vous avez choisi un chiffre négatif")
} */



// exo 3 
/*
var nb1 = prompt("choisir un nombres"); var nb2 = prompt("choisir un deuxième nombre")
var result1 = nb1*nb2;

if (result1 > 0) {
    alert("le resultat de vos nombres sont positifs ")
} else if (result1 < 0){
    alert("le resultat de vos nombres sont négatifs ")
} */



// 3bis 
/*
var nb3 = prompt("choisir un nombres"); var nb4 = prompt("choisir un deuxième nombre")
var result2 = Number(nb3) + Number(nb4); 

if (result2 > 0) {
    alert("le resultat de vos nombres sont positifs ")
} else if (result2 < 0) {
    alert("le resultat de vos nombres sont négatifs ")
} */



// exo 5
/*
var nombre = prompt('Ecrivez un nombres')

if (nombre > 0) {
    alert("vôtre nombres est positif")
} else if( nombre == 0) {
    alert("vous avez choisir un chiffre neutre ")
} else {
    alert("vous avez choisir un nombre ")
} */



// tantque la condition est vraie ==> fais l'instruction
/*
let count = 0

while(count<50) {
    console.log(count)
     count ++ // incremetation
} 

console.log(count)
*/

/*
for(var i = 0; i < 10; i++){
    document.write("hello ")
}
*/


/*
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

document.write(result);
*/

/*
for( var counter= 1; counter < 10 ; counter++) {
    document.write(' dans la boucle: ' + counter)
    
}
document.write(' dehors de la boucle: ' + counter)
*/

// ordre de la boucle 

    // lire la variable
    // verifier la condition
    // execution du console.log()
    // incremeentation


/*  
dans for() on peut excuté tous dans une ligne 
à la différence de while ou do-while
*/


// tableaux
let array = [0, 1, 2, "banana", 4, 5, 6]

console.log(array)
console.log(array[3])

array[1] = "sofitel";
console.log(array)


array.push(" push") // rajoute un élément en derniere position du tableau
array.unshift("unshit") // rajoutr un élément en position 0

console.log(array)

//.pop // enlève le dernier élément du tableaux
 //.shift // enlève l'élément zero du tableau

// exo tableau

var tab = ["pasteque", "tomate", "choux", 'cheese'];

var i;

for(i=0; i < tab.length ; i++) {
    console.log(" Element : " + i + " Item :  " + tab[i])
}

