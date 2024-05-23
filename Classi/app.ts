class Persona {
    // public nome: string ===== non serve perche lo metti nel costruttore 
    // private cognome: string

    constructor(private readonly nome:string, private cognome:string) {
        // this.nome = nome  ====== non serve perchè typescript lo capisce dai paramentri del costruttore
        // this.cognome = cognome

        //readonly serve per far si che non si posso piu modificare
    }

    presenta() : void{
        console.log(`Ciao sono ${this.nome} ${this.cognome}`);
        
    }

    saluta(persona: Persona): void{
        console.log(`Ciao ${this.nome} ${this.cognome} è un piacere conoscerti !`);
        
    }
}



let persona1 = new Persona('elena','soave')
let persona2 = new Persona('anna','viola')
let persona3 = new Persona('alessandro','neri')

persona1.presenta()
persona2.saluta(persona1)


class Studente extends Persona {
    constructor (
        nome: string,  // Non bisogna mettere private perche è gia stato messo nel costruttore di Persona
        cognome: string,
        private materiaPreferita: string
    ) {
        super(nome,cognome)  //la chiamata super serve per i costruttori derivanti da classi e vuole come parametri quelli della classe genitore
    }
    
}

const studente: Studente = new Studente('mariagiuseppa','scarpulli', 'religione')
studente.presenta()


class Preside {

    private static instance: Preside
    private constructor(private nome: string, private cognome:string){}
    static getInstance(){
        if (Preside.instance){
            return this.instance
        }

        this.instance = new Preside('marco','verdi')
        return this.instance
    }

    presenta(){
        console.log(`ciao sono ${this.nome} ${this.cognome} e sono il nuovo preside`);
        
    }
}

Preside.getInstance().presenta()


