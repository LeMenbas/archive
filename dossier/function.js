/* Exercice 1
	Ecrire une fonction showMessage() qui affiche une alerte "Yo !".
	Exécuter / Appeler cette fonction 
*/

// function showMessage() {
// 	alert("Yo !")
// }

// showMessage()

/* Exercice 2
	Ecrire une fonction myFunction() qui prend en paramètre un argument (de type string) et l'affiche dans la console.
	Exécuter / Appeler cette fonction 
*/

// function myFunction(a) {
// 	console.log(typeof(a) + a)
// }
// myFunction(' hello')

// corrigé :
// function myFunction(z) {
// 	if(typeof(z) === 'string') {
// 		console.log(z)
// 	} else {
// 		console.log("donnée invalide")
// 	}
// }

// myFunction(5)

/* Exercice 3
	Ecrire une fonction myFunction() qui prend en paramètre deux arguments et les affiche via deux alert().
	Exécuter / Appeler cette fonction 
*/

// function laFunction(a, b) {
// 	alert(a);
// 	alert(b);
// }
// laFunction("un", "deux")


/*	Exercice 4 
	Ecrire une fonction qui prend en paramètre deux arguments dont le deuxième facultatif.
	Affectez une valeur par défaut au deuxième argument au cas où l'utilisateur ne rentrerait pas
	de paramètre lors de l'appel de la fonction. 
	Les arguments doivent être affichés dans une alert().
*/

// function fac(a, b) {
// 	b = prompt("entrez une valeur")

// 	return a + b
// }

// alert(fac("hello " ))



/*	Exercice 5
	Créer la fonction qui prend deux nombres en paramètre (a et b) et affiche dans une boite de dialogue 
	le résultat de la multiplication de ces deux nombres. Si la l'utilisateur ne rentre pas le deuxième nombre,
	alors b prend la valeur 1 par défaut.
*/



// function result(a, b) {
// 	let msg = "le resultat de " + a + " x " + b + " est égal à : "
// 	b = prompt("Veuillez entrez une valeur")
// 	if ( b == "") {
// 		b == 1
// 	};
// 	return msg + (a * b)
// }
// console.log(result(4))

/*	Exercice 6
	Ecrire une fonction direBonjour qui renvoie la chaine de caractère "Bonjour!".
	Affichez ensuite cette chaine de caractère dans une boite de dialogue via cette fonction.
*/

// function direBonjour() {
// 	return "Bonjour"
// }
// alert(direBonjour())

/*
/*
	Exercice 7
	Ecrire une fonction anonyme qui s'exécute immédiatement et qui affiche dans la console "Fonction anonyme qui s'exécute immédiatement"
*/



/*
	Exercice 8
	Ecrire une fonction nommée qui s'exécute immédiatement et qui affiche dans la console "Je fais Blabla"
*/

/*
	Exercice 9 
	Ecrire la même fonction mais en deux étapes : 1) Déclaration de la fonction 2) Appel/Exécution de la fonction
	
*/

/* 
	Exercice 10
	Ecrire une fonction qui affiche "Fonction appelée par référence" dans la console.
	Cette fonction doit être appelée par "référence"
	Ecrivez en commentaire l'intérêt de passer une fonction par référence par raport à une fonction nommée
*/

/* 
	Exercice 11 
	Créez une variable globale test qui contient une chaine de caractère "Ferrari".
	Créez un scope (zone isolée) avec 
	 	- une variable locale test qui contient une chaine de caractère "Peugeot"
	 	- une fonction/méthode qui affiche la variable test dans la console
	Puis, à l'extérieur du scope, affichez la variable test dans la console.
	En faisant cet exercice, vous devez comprendre la notion de portée de variable
*/

/*
	Exercice 12
	Ecrire la fonction qui permet de calculer n'importe quelle puissance d'un nombre. En apramètre de la fonction, le nombre et la puissance.
	Exemple : 5**8 = 390 625  signe de la puissance **
*/

// function puissance(a, b) {
// 	return a ** b
// } 
// console.log(puissance(5, 8))

/* 	Exercice 13
	Ecrire une fonction avec deux arguments : une string et une lettre
	La fonction  renvoie le nombre de fois où la lettre est présente dans la chaine de caractère.
	Exemple : "Salut ça va ?", "a"
	--> 3 fois
	La chaine "a" est présente 3 fois dans la phrase.
	Indice : Utilisez la méthode charAt()
*/


/* 
	Exercice 14 
	Expliquez à quoi sert la fonction .split()
	Indiquez les arguments qu'elle prend en paramètre.
	Donnez un exemple d'utilisation de la fonction .split()
*/


/* 
	Exercice 15
	Ecrire une fonction qui prend en paramètre un nombre et qui génère au hasard une chaine de caractère 
	de la taille du nombre spécifié (une sorte de générateur de mot de passe)
	La taille d'une chaine de carctère se trouve grâce à la fonction .length
	Exemple : var c = "Salut";    c.length  donne la taille de Salut, soit 5
	Indice : Fonctions utiles : charAt(), Math.floor() et Math.random()
*/

/* 
	Exercice 16  
	Expliquez à quoi sert la fonction .slice()
	Indiquez les arguments qu'elle prend en paramètre.
	Donnez un exemple d'utilisation de la fonction .slice()
*/

/* 
	Exercice 17
	Créez un tableau de 4 couleurs. Exemple : "Rouge", "vErt", "noir", "pourpre"
	Convertissez le tableau en chaine de caractère.
*/


/* 	Exercice 18 
	// Ecrire la fonction qui affiche "Je suis ton père" si on lui rentre en paramètre "Dark Vador"
	// Et "Je suis Luke" si on lui rentre en paramètre "Luke"
	// Si on lui rentre autre chose en paramètre, la fonction affiche "Raviolis".
*/

/* 
	// Exercice 19
	// Ecrire la fonction qui calcule l'âge "équivalent humain" d'un chien.
	// On dit souvent que l'âge d'un chien correspond en age humain à 7 fois son age.
	// Exemple : mon chien a 5ans. --> Celà correspond à 7*5 = 35 ans.
*/

/* 
	// Exercice 20
	// Ecrire la fonction qui affiche combien de temps vous dormez dans votre vie, en heures, jours, mois et années.
	// Vous devez entrer en paramètre votre moyenne de sommeil en heures et votre espérance de vie en années (79.5 ans pour nous les hommes :'-( )
*/

/* 
	// Exercice 21 
	Un convertisseur de température.
	Créez deux fonctions. Une convertie des degrées Celcius en degrés Fahrenheit.
	L'autre convertie des degrés Fahrenheit en degrés Celcius.	

*/



