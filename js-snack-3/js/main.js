"use strict";

//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

alert("Ciao Gatsby, benvenuta nel tuo generatore automatico di liste.");


const listaNomi = [
    "Luca",
    "Marco",
    "Paolo",
    "Fabio",
    "Cristian",
    "Mara",
    "Sara",
    "Chiara"
];

const listaCognomi = [
    "Rossi",
    "Bianchi",
    "Proietti",
    "Frascolla",
    "Monte",
    "lillo",
    "Verde",
    "Pippo"
];

const nomeCompleto = [];


   for (let i = 0; i < 3; i++){

    const randomNome = Math.floor(Math.random() * listaNomi.length);
    const randomCognome = Math.floor(Math.random() * listaNomi.length);

    const newFullName =   `${listaNomi[randomNome]} ${listaCognomi[randomCognome]}`;
    nomeCompleto.push(newFullName)
   }

   console.log(nomeCompleto)

   


