
class Usuarios {   //Crear la clase usuarios

    constructor() {

        this.personas = [];
    }


    agregarPersona(id, nombre, sala) { //Método agregar personas

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {

        let persona = this.personas.filter(persona => persona.id === id)[0];  //lo comparo y recibo el primer elemento cque coincida con el id

        return persona;


    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter( persona => persona.sala === sala);
        return personasEnSala;


    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }




}

module.exports = {

    Usuarios

}