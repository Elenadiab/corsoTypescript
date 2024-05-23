"use strict";
// INTERFACCIA
// Un'interfaccia è un contratto che specifica quali proprietà e metodi un oggetto deve avere.
// Caratteristiche:
// Non contiene implementazioni di metodi, solo dichiarazioni.
// Non può avere metodi con codice.
// Può essere implementata da classi e può essere estesa da altre interfacce
// Quando usarla: 
// Quando vuoi definire un contratto che più classi possono implementare senza fornire alcuna logica di implementazione.
class X {
    constructor(nome) {
        this.nome = nome;
    }
    scrivi() {
    }
    saluta() {
        console.log('ciao');
    }
}
class Dispositivo {
    constructor(nome, anno) {
        this.nome = nome;
        this.anno = anno;
    }
}
class Telefono extends Dispositivo {
    accendi() {
        console.log('Il telefono si accende');
    }
    spegni() {
        console.log('Il telefono si spegne');
    }
}
class Smartphone extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log('Lo Smartphone si accende');
    }
    spegni() {
        console.log('Lo Smartphone si spegne');
    }
    connettiInternet() {
        console.log('Lo Smartphone si connette');
    }
}
class Computer extends Dispositivo {
    constructor(nome, anno, ip) {
        super(nome, anno);
        this.ip = ip;
    }
    accendi() {
        console.log('Il Computer si accende');
    }
    spegni() {
        console.log('ILComputer si spegne');
    }
    connettiInternet() {
        console.log('Il computer si connette');
    }
}
class Persona {
    constructor(nome, cognome, via, telefono) {
        this.nome = nome;
        this.cognome = cognome;
        this.via = via;
        this.telefono = telefono;
    }
    mangia() {
        throw new Error("Method not implemented.");
    }
    respira() {
        throw new Error("Method not implemented.");
    }
    scrivi() {
        throw new Error("Method not implemented.");
    }
    saluta() {
        throw new Error("Method not implemented.");
    }
}
