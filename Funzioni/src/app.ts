
// Diamo alla funzione un parametro fisso
function sommare(num1: number, num2 = 2) : number {
    return(num1 + num2);   
}

sommare(3)
// Se non specifichi il secondo parametro typescript prende quello fisso (num2 = 2)



// Nella funzione che non ritorna nulla si mette void (che è diverso da undefined)
function faniente(stringa: string): void {
    console.log(stringa);
    
}


//Funzione come TIPO di dato di una variabile
let provare: Function = sommare
provare = faniente

//Funzione che come tipo d parametro accetta una funzione di callback
function provaparametri (x: number, cb: () =>void) {}