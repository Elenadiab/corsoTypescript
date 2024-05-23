
//Type assignment 
let provaNumber: number = 5;
let provaString: string = "ciao";
let provaBoolean: boolean = true

//Type inference (quando ts capisce il tipo)
let prova10 = 12;





function somma10 (num1: number, num2: number): number {
    return (num1 + num2)
     
}



let persona: {
    nome: string,
    cognome: string,
    eta: number,
    indirizzo: {
        via: string,
        civico: number,
        citta: string
    }
}


persona = {
    nome: "Elena",
    cognome:"Soave",
    eta: 46,
    indirizzo: {
        via: "",
        civico: 6,
        citta: "Bologna"
    }
}




// Anziche passare tanti paramentri ad una funzione, posso passare un oggetto
function getData(data: {id:number, username:string}) {
    console.log(data.username);   
}
getData({id:1, username: 'elenadiab'})



// TIPI DI DATI

// Array di number
const array:number[] = [1,2,3]

// Tuple, ovvero array di lunghezza fissa e valori definiti nel numero nella posizione e enel tipo
const tupla: [number,number] = [1,2]


// esempio ANY
let esempioAny1: any = 3
let esempioAny2: any = true
let esempioAny3: any = [4, 'ciao']

// esempio UNION
let esempioUnion: string | number | string[]
// quindi la vvariabile avrà un valore che sarà una stringa, oppure un numero, oppure un array di stringhe

// esempio tipi CUSTOM
type Personacustom = {
    nome: string,
    cognome: string,
    eta: number,
    online: boolean
}

// esempio ENUM
// definisco il ruolo con 3 variabili possibili, quindi ruolo potra valere solo ADMIN, USER o GUEST (creo delle "etichette")
enum Ruolo {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest'
}

const persona10 = {
    nome:"elena",
    cognome:"soave",
    ruolo: Ruolo.ADMIN
}

if (Ruolo.ADMIN == 'admin') {}
if (Ruolo.USER == 'user') {}
if (Ruolo.GUEST == 'guest') {}

