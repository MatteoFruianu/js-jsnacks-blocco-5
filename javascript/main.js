// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.


// var bikes = [

//     {
//         name: "Scott",
//         weigth: 12

//     },

//     {
//         name: "Cube",
//         weigth: 8

//     },

//     {
//         name: "Rockrider",
//         weigth: 10

//     },
 

//  ];  

// //  handlebars

// // per prima cosa creo un riferimento al template in questione

// var source = $("#bike-template").html();
// var template = Handlebars.compile(source);


//  var lightBike = bikes[0]; //seleziono a prescindere il primo elemento dell'array da comparare con quelli che seguiranno

//  //ciclo sugli elementi dell'array

//  for (var i = 0; i < bikes.length; i++) {

//     if ( bikes[i].weigth < lightBike.weigth) {
//          lightBike = bikes[i]
//     }

//  }


// var context = 
// {   name: lightBike.name, 
//     weigth: lightBike.weigth
// };
// var html = template(context);

// $(".container").append(html);



// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

// var names = ["Marco", "Giulia", "Stefano", "Graziano", "Giovanna", "Salvatore"];

// var tot = names.length - 1;

// var min = parseInt( prompt("indice di inizio tra 0 e " + tot));
// var max = parseInt( prompt("indice di fine (superiore a indice di inizio) tra 0 e " + tot));


// var newArray = [];

// for (var i = 0; i < names.length; i++) {

//     if ( min <= i && max >= i ) {
//         newArray.push(names[i])
//     }

// }


// console.log("Lista orginale: " + names);
// console.log("Indici utente:  " + min, max);
// console.log("Intervallo utente: " + newArray);

// JSnack 3
// Creiamo un array di oggetti (scelti da voi)
// Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
// Non dobbiamo modificare l'array iniziale.

var students = [

    {
    
        nome: "Matteo",
        cognome: "Fruianu",
        eta: 32
    
    },
    
    {
    
        nome: "Camilla",
        cognome: "Sotgiu",
        eta: 30
    
    },
    
    {
    
        nome: "Antonello",
        cognome: "Camboni",
        eta: 31
    
    },
    
    {
    
        nome: "Flora",
        cognome: "Pilo",
        eta: 22
    
    },
    
    
    
    ]

    var newArrayStudents = [];

    for (var i = 0; i < students.length; i++  ) {

        var copyStudents = {
            nome: students[i].nome,
            cognome: students[i].cognome,
            eta: students[i].eta,
            position: generateRandomLetter()
        }

        newArrayStudents.push(copyStudents)

    }



   

    console.table(students);
    console.table(newArrayStudents);

    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
      
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      }
      










































