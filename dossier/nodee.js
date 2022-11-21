
// const h1 = document.body.childNodes[1]

// let fname = prompt("entrez votre Prénom")
// let lname = prompt("Entrez votre nom de famille")

// h1.textContent = "Bonjour " + fname + ' ' + lname;

// console.log(document.querySelector('body').innerHTML)

// let p = document.querySelector('p')

// p.innerHTML = '<strong> Hello worlds </strong>'

// let google = document.querySelector("a")

// console.log(google.href)

// const h2 = document.getElementById("text")

// console.log(h2.classList)

// const ajouter = document.createElement("li")
// ajouter.setAttribute("li",'quatrieme li')
// document.querySelector('ul').appendChild(ajouter)
// console.log(ajouter)
// ajouter.textContent = "je suis le quatrième li"

// const iden = document.querySelector('ul')
// document.querySelector('ul').insertBefore(ajouter,document.getElementById("trois"))

const bouton = document.getElementById("button")

function clic() {
    console.log("Clic !")
}

const h1 = document.querySelector("h1")

bouton.addEventListener("click", function(e) {
    vale.removeChild(h1)
   
})

document.getElementById('troll').addEventListener('click', function(e){
    e.preventDefault();
    alert("j'ai utilisé un preventdefault")
    
})


document.addEventListener("mousedown", (e) => {
    console.log("mousse down")
})


// setTimeout(() => {
//     bouton.removeEventListener("click", clic);
//     bouton.disabled = true
// }, 5000)

const vale = document.getElementById("container");
// vale.style.cssText = ("color: blue; background-color: yellow")

// document.addEventListener("keypress", function(e){
//     console.log("vous avez appuyer sur la touche " + e.key)
//     console.log('Vous avez appuyé sur la touche ' + String.fromCharCode)
// })

