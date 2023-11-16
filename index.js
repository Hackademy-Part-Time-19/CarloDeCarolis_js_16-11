/*-Dato un array di nomi let array = [“franco”, “Gennaro”, “Valerio”, “Giulia”, “eugenio” ….]


1. Utilizzare il ciclo for per stampare tutti i nomi della lista


2. Utilizzare il ciclo for annidato in un altro ciclo for per stampare i nomi carattere per carattere. Il risultato della stampa deve essere lo stesso dell’esercizio predente. 


-Ricreare lo sportello automatico che fa fare prelievi e bonifici e mantiene traccia del conto dopo le operazioni, che si comporti in maniera perpertua finchè l’utente preme l’opzione per chiudere. Usare ciclo while.

-Fare la somma dei numeri da 1 a 200 in maniera cumulativa, stampare poi il risultato finale

-Stampare tutti i numeri divisibili per 20 nell’intervallo tra 1 e 400*/


let array = ["franco", "Gennaro", "Valerio", "Giulia", "eugenio"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


let array1 = ["franco", "Gennaro", "Valerio", "Giulia", "eugenio"];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1[i].length; j++) {
        console.log(array1[i][j]);
        
    }
}


let sommaCumulativa = 0;

for (let i = 1; i <= 200; i++) {
    
    sommaCumulativa = sommaCumulativa + i;

}
console.log("La somma è " + sommaCumulativa);





for (let i = 1; i <= 400; i++) {
    if (i % 20 == 0) {
        
        console.log(i);
    }
    
}



