const name = 'Bruno';
const lastname = 'Storm';

const text1 = "bienvenue " + name + " " + lastname;
console.log(text1)
const texte2 = `bienvenue ${name} ${lastname}`;
console.log(texte2)

//méthodes liées au String
const phrase = "bonjour tout le monde ! bonjour";
console.log(phrase.length);
console.log(phrase.toUpperCase());
console.log(phrase.indexOf('bonjour'));
console.log(phrase.lastIndexOf('bonjour'));

if(phrase.indexOf('bonjour') !== -1){
    console.log("le mot existe")
};

const email = 'test@email.com';
console.log(email.includes('@'));

//startwith et endwith
const fichier = "test.pdf";
console.log(fichier.endsWith('.pdf'));

const texte3 = "            bonjour         ";
console.log(texte3.trim());
console.log(texte3.trimEnd());

//padStart et padEnd
const nombre = "7"
console.log(nombre.padStart(3,"0"))

//découpage
let js = "JavaScript c'est cool";
const sub1 = js.substring(0,4);
const sub2 = js.substring(10,21);
console.log(`${sub1} ${sub2}`)

//slice qui est plus flexible que substring
let js2 = "JavaScript c'est cool 😎";
const sub3 = js2.slice(0,4);
const sub4 = js2.slice(-7);
console.log(`${sub3} ${sub4}`);

//diviser une chaine en tableau
const animaux = "chat,chien,lapin";
let tbleau = animaux.split(',');
console.log(tbleau);

//exemple parser un csv simple
const csv = "Jean,Dupont,30";
let [prenom, nom, age] = csv.split(',');
console.log(prenom);

const mySuperString = "je suis un homme de cro-magnon";
for(let i = 0; i < mySuperString.length; i++){
    console.log(mySuperString[i]);
};
let mySuperString2 = "Hello world ici";
let chars = mySuperString2.split('');

for(let i = 0; i < chars.length; i++) {
    if(chars[i] === " ") {
        chars[i] = "";
    }
}
let result = chars.join('');
console.log(result);