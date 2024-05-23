var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    // public nome: string ===== non serve perche lo metti nel costruttore 
    // private cognome: string
    function Persona(nome, cognome) {
        // this.nome = nome  ====== non serve perchè typescript lo capisce dai paramentri del costruttore
        // this.cognome = cognome
        this.nome = nome;
        this.cognome = cognome;
        //readonly serve per far si che non si posso piu modificare
    }
    Persona.prototype.presenta = function () {
        console.log("Ciao sono ".concat(this.nome, " ").concat(this.cognome));
    };
    Persona.prototype.saluta = function (persona) {
        console.log("Ciao ".concat(this.nome, " ").concat(this.cognome, " \u00E8 un piacere conoscerti !"));
    };
    return Persona;
}());
var persona1 = new Persona('elena', 'soave');
var persona2 = new Persona('anna', 'viola');
var persona3 = new Persona('alessandro', 'neri');
persona1.presenta();
persona2.saluta(persona1);
var Studente = /** @class */ (function (_super) {
    __extends(Studente, _super);
    function Studente(nome, // Non bisogna mettere private perche è gia stato messo nel costruttore di Persona
    cognome, materiaPreferita) {
        var _this = _super.call(this, nome, cognome) || this; //la chiamata super serve per i costruttori derivanti da classi e vuole come parametri quelli della classe genitore
        _this.materiaPreferita = materiaPreferita;
        return _this;
    }
    return Studente;
}(Persona));
var studente = new Studente('mariagiuseppa', 'scarpulli', 'religione');
studente.presenta();
var Preside = /** @class */ (function () {
    function Preside(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    Preside.getInstance = function () {
        if (Preside.instance) {
            return this.instance;
        }
        this.instance = new Preside('marco', 'verdi');
        return this.instance;
    };
    Preside.prototype.presenta = function () {
        console.log("ciao sono ".concat(this.nome, " ").concat(this.cognome, " e sono il nuovo preside"));
    };
    return Preside;
}());
Preside.getInstance().presenta();
