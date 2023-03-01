"use strict";

let sum= 0;

let num =1;

while (num <= 5) {
    
    

    const userNum = Number(prompt("inserisci 5 volte un numero",  `(${num})`));
    console.log(userNum);
    if(!isNaN(num)){
        sum+=num;
        num++;
    }

}

alert(sum);