/****************************************
 * OGGETTO STUDENTI v 0.1.0
 * 
 * 1) Creare un oggetto che descriva uno studente,
 * con le seguenti proprietà: nome, cognome e età. 
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * 2) Creare un array di oggetti di studenti. 
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * 3) Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
 * Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array. 
 * 
 ****************************************/

// 1) Creazione oggetto studente
var studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 34,
}

// Stampare le proprietà dell'oggetto
for (var key in studente) {
    console.log(studente[key]);
}

// 2) Creare un array di oggetti di studenti
var studenti = [
    {
        nome: 'Paolo',
        cognome: 'Verdi',
        eta: 15,
    },
    {
        nome: 'Fabio',
        cognome: 'Gialli',
        eta: 47,
    },
    {
        nome: 'Antonio',
        cognome: 'Mazza',
        eta: 25,
    }
];

// Ciclare array e stampare nome e cognome
for (var i = 0; i < studenti.length; i++) {
    console.log('Studente: ' + studenti[i].nome + ' ' + studenti[i].cognome);
}

// 3) Creazione oggetto vuoto
var studentePlus = {
    nome: '',
    cognome: '',
    eta: 0,
};

// Creazione dati con i prompt
var nome = prompt('Inserisci il tuo nome');
studentePlus.nome = nome;

var cognome = prompt('Inserisci il tuo cognome');
studentePlus.cognome = cognome;

var eta = parseInt( prompt('Inserisci la tua eta') );
studentePlus.eta = eta;

// Inserimento nell'array Studenti 
studenti.push(studentePlus);
console.log(studenti);




