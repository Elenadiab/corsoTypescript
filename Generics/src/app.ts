//I generics sono uno strumento che mette in relazione piu dati insieme creando dati composti


// Questo è un generics e vuol dire array di stringhe ovviamente
const arr: Array<string> = ['Ciao come stai','Tutto bene grazie']

function creaArray<T extends number | string>(items:T[]): T[] {
    return new Array().concat(items)
}

const arr1 = creaArray<number>([1,2,3,4,5])
const arr2 = creaArray<string>(['a','b','c','d'])

arr1.push()


/* --------------------------------- ESEMPIO -------------------------------- */

class Prova<T> {
    private lista : T[] = []

    aggiungiItem(item:T){
        this.lista.push(item)
    }

    rimuoviItem(item:T){
        this.lista.splice(this.lista.indexOf(item,1))
    }

    visualizzaItem(){
        if (this.lista.length === 0){
            console.log('Lista vuota');
            
        }else{
            this.lista.forEach(item =>{
                console.log(item);
                
            })
        }
    }
}

const listaStringhe = new Prova<string>()

listaStringhe.aggiungiItem('luca')
listaStringhe.aggiungiItem('marco')
listaStringhe.aggiungiItem('anna')

listaStringhe.rimuoviItem('anna')

listaStringhe.visualizzaItem()

