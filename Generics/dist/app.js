"use strict";
//I generics sono uno strumento che mette in relazione piu dati insieme creando dati composti
// Questo è un generics e vuol dire array di stringhe ovviamente
const arr = ['Ciao come stai', 'Tutto bene grazie'];
function creaArray(items) {
    return new Array().concat(items);
}
const arr1 = creaArray([1, 2, 3, 4, 5]);
const arr2 = creaArray(['a', 'b', 'c', 'd']);
arr1.push();
/* --------------------------------- ESEMPIO -------------------------------- */
class Prova {
    constructor() {
        this.lista = [];
    }
    aggiungiItem(item) {
        this.lista.push(item);
    }
    rimuoviItem(item) {
        this.lista.splice(this.lista.indexOf(item, 1));
    }
    visualizzaItem() {
        if (this.lista.length === 0) {
            console.log('Lista vuota');
        }
        else {
            this.lista.forEach(item => {
                console.log(item);
            });
        }
    }
}
const listaStringhe = new Prova();
listaStringhe.aggiungiItem('luca');
listaStringhe.aggiungiItem('marco');
listaStringhe.aggiungiItem('anna');
listaStringhe.rimuoviItem('anna');
listaStringhe.visualizzaItem();
