// // exo 1

// let tableaux = [0, 1, 2, 3, 4, 5,6 ]
// console.log(tableaux)

// // exo 3

// let utilisateur = []

// for(i= 0; i< 4 ; i++) {
// let text = parseInt( prompt("entrez une valeux"))
//  if(text != '') {
//     utilisateur.push(text)
 
//  } 
// }
// console.log(utilisateur)

// let somme = 0;
// for(let j= 0 ; j< utilisateur.length ; j++) {
//     somme = somme + utilisateur[j]
    
// }
// console.log(somme)

// exo 2

// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// let voyelles = [];

// for(i =0 ; i < alphabet.length; i++) {
//     if(alphabet[i] == "A" || alphabet[i] == "E" || alphabet[i] == "I" || alphabet[i] == "O" || alphabet[i] == "U" || alphabet[i] == "Y" ) {
//         voyelles.push(alphabet[i])
//     } 
//     }

// console.log(voyelles)

// exo 6


// let tableau = [];
 
// let nb = parseInt(prompt("combien de chiffre vous voulez entrer"));

// for(let i= 0; i < nb;i++ ) {

//    let valeur = parseInt( prompt("entre une valeur" + (i + 1)))

//     tableau.push(valeur)
// }

// console.log(tableau)

// let tabInt= [10, -9, -6, 5, 3, 2];
// let impaires = []
// let paires = []

// for(let i =0 ; i < tabInt.length; i++ ) {
// if(tabInt[i] % 2 == 0) {
//     paires.push(tabInt[i])
// }else if (tabInt[i] % 2 != 0) {
//     impaires.push(tabInt[i])
// } else {

// }
// }
// console.log('impaires : ', impaires)
// console.log('paire : ', paires)

// let tabone = [4, 8, 7, 9, 1, 5, 4, 6];
// let tabdeux = [7, 6, 5, 2, 1, 3, 7, 4];
// let tabresult = []

// for(i= 0; i< tabone.length; i++) {
//     tabresult.push(tabone[i] + tabdeux[i])
// }
// console.log(tabresult)

// let tab = [11, 14, 12, 11, 2, 8, 11, 10]

// let gv = 0
// let pos = 0

// for(let i= 0; i < tab.length; i++) {
//     if (tab[i] > gv) {
//         gv = tab[i];
//         pos = i
//     }
// }

// console.log('la plus grande valeur de tableau est ' + gv + " est sa position est "+ pos)

// object

// const object = {a: 1, b: 2, c: 3,}

// object.a = 5 // il est possible de modifié la valeur dedans l'object même en const

// function showMessage() {
//     alert("ceci est mon message")
//     console.log('alert done')
// }

// showMessage()


// function test(a, b) {
//     alert(a);
//     console.log(b)
// }

// test("hello", 25)

// function sayhello() {
//     let name = prompt("entrez votre nom ")
//     alert("bonjour " + name)
   
// }

// sayhello(name) 

// let result = "le resultat est : "


// function bonjour(result , a, b) {
//    return result + (a + b) // protégé le calcul entre () du string et du * , / car il vont prendre la priorité sur le reste des valeurs
 
// }
// console.log(bonjour(result, 25, 12))