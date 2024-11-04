/**
 * Le Dom c'est l'arborescence de notre page web
 * Il faut imaginer la page web comme un abre généalogique familial. Le dom c'est exactement ça, c'est une
 * représentation hiérarchique de tous les éléments définis dans la page !
 *
 * document (racine)
 *     └── html
 *         ├── head
 *         │   ├── title
 *         │   └── meta
 *         └── body
 *             ├── header
 *             │   └── nav
 *             ├── main
 *             │   ├── section
 *             │   └── article
 *             └── footer
 *
 * Les types de noeuds
 * **/

const firstChild = document.querySelector('.enfants li:first-child' );
console.log(firstChild);
const lastChild = document.querySelector('.enfants li:last-child' );
console.log(lastChild);
const even = document.querySelectorAll('.enfants li:nth-child(even)')
console.log(even);
const pere = document.querySelector('.parents li:first-child')
console.log(pere);
pere.textContent = "vador"
const mere = document.querySelector('.parents li:last-child')
mere.innerHTML = '<p> je suis un paragraphe</p>'

const parent = document.querySelector('.parents')
parent.classList.add('.parents-class')
parent.classList.remove('.parents-class')
parent.classList.add('active')
parent.classList.toggle('active')

let cpt = 1
const btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    cpt++
    console.log(cpt)
})

