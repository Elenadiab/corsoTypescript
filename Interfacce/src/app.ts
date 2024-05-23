// INTERFACCIA
// Un'interfaccia è un contratto che specifica quali proprietà e metodi un oggetto deve avere.
// Caratteristiche:
// Non contiene implementazioni di metodi, solo dichiarazioni.
// Non può avere metodi con codice.
// Può essere implementata da classi e può essere estesa da altre interfacce
// Quando usarla: 
// Quando vuoi definire un contratto che più classi possono implementare senza fornire alcuna logica di implementazione.




// CLASSE ASTRATTA
// E'na classe astratta è una classe che non può essere istanziata direttamente e può contenere sia metodi completi (con implementazione) sia metodi astratti (senza implementazione).
// Caratteristiche:
// Può avere implementazioni di metodi.
// Può avere metodi astratti che devono essere implementati dalle classi derivate.
// Serve come una classe base da cui altre classi possono derivare.
// Quando usarla: 
// Quando vuoi fornire una base comune con logica di implementazione parziale che deve essere completata dalle classi derivate.


interface Prova {
    readonly nome: string
    saluta(): void
}

interface Qwerty {
    scrivi(): void
}

class X implements Prova, Qwerty {
    nome: string
    constructor(nome:string) {
        this.nome = nome
    }

    scrivi(): void {
    }

    saluta(): void {
        console.log('ciao');    
    }
}



/* -------------------------------------------------------------------------- */
/*                             ESEMPIO DISPOSITIVO                            */
/* -------------------------------------------------------------------------- */

interface Internet {
    ip: string
    connettiInternet(): void

}


abstract class Dispositivo {
    
    constructor(protected nome: string, protected anno: number){}

    abstract accendi(): void 
    abstract spegni(): void 
}

class Telefono extends Dispositivo {

    accendi(): void {  
        console.log('Il telefono si accende');
         
    }

    spegni(): void {
        console.log('Il telefono si spegne');
            
    }    
}


class Smartphone extends Dispositivo implements Internet {
    
    ip: string

    constructor(nome: string, anno:number, ip:string){
        super(nome,anno)
        this.ip = ip
    }

    accendi(): void {
        console.log('Lo Smartphone si accende');
    }
    spegni(): void {
        console.log('Lo Smartphone si spegne');
    }

    connettiInternet(){
        console.log('Lo Smartphone si connette');
        
    }
}


class Computer extends Dispositivo implements Internet{
    
    ip: string

    constructor(nome: string, anno:number, ip:string){
        super(nome,anno)
        this.ip = ip
    }

    accendi(): void {
        console.log('Il Computer si accende');
    }
    spegni(): void {
        console.log('ILComputer si spegne');
    }

    connettiInternet(){
        console.log('Il computer si connette');
        
    }
}


/* -------------------------------------------------------------------------- */
/*                          ESEMPIO INTERFACE EXTENDS                         */
/* -------------------------------------------------------------------------- */


interface X {
    nome: string
}

interface Y extends X {
    cognome: string
    respira(): void
}

interface Z {
    telefono: string
    saluta(): void
}

interface W extends Y, Z {
    via: string
    mangia(): void
}

class Persona implements  W {

    via: string
    cognome: string
    nome: string
    telefono: string

    constructor(nome: string, cognome: string, via: string, telefono:string){
        this.nome = nome
        this.cognome = cognome
        this.via = via
        this.telefono = telefono 

    }
    mangia(): void {
        throw new Error("Method not implemented.")
    }
    respira(): void {
        throw new Error("Method not implemented.")
    }
    scrivi(): void {
        throw new Error("Method not implemented.")
    }
    saluta(): void {
        throw new Error("Method not implemented.")
    }


}



/* -------------------------------------------------------------------------- */
/*                            ESEMPIO CON IL LIBRO                            */
/* -------------------------------------------------------------------------- */

interface ILibro{
    titolo:string
    autore:string
    anno: string
}

class Libro implements ILibro {

    constructor(public titolo:string, public autore:string, public anno:string){}
}

class Libreria {
    private libri: ILibro[] = []

    aggiungi(libro:ILibro) :void {
        this.libri.push(libro)
    }

    rimuovi(titolo:string) :void {
        this.libri.filter(libro =>{
            libro.titolo !== titolo
        })
    }

    visualizza(): void {
        if (this.libri.length === 0){
            console.log('Libreria vuota')
        } else {
            this.libri.forEach(libro =>{
                console.log(`Titolo: ${libro.titolo} - Autore ${libro.autore} - Anno ${libro.anno}`);
                
            })
        } 
    }
}

const libreria = new Libreria

const libro1 = new Libro('Il Signore degli Anelli', 'McDowell', '1999')
const libro2 = new Libro('La Mosca', 'Asimow','2001')
const libro3 = new Libro('Il nome della Rosa', 'Umberto Eco', '1980')

libreria.aggiungi(libro1)
libreria.aggiungi(libro2)
libreria.aggiungi(libro3)

libreria.rimuovi('Il Signore degli Anelli')

libreria.visualizza()


/* -------------------------------------------------------------------------- */
/*                             ESEMPIO CON CANZONI                            */
/* -------------------------------------------------------------------------- */

interface ICanzone {
    titolo: string
    autore: string
    durata: number
}

class Canzone implements ICanzone {
    constructor(public titolo:string, public autore:string, public durata:number){
    }
}

class Playlist {
    private canzoni: ICanzone[] = []

    aggiungi(canzone:ICanzone): void {
        this.canzoni.push(canzone)
    }

    rimuovi(titolo:string) : void {
       this.canzoni.filter(canzone =>{
        canzone.titolo !== titolo
       })
    }

    visualizza(): void {
        this.canzoni.forEach(canzone =>{
            console.log(`${canzone.titolo} ${canzone.autore} ${canzone.durata}`);
            
        })
    }

}



