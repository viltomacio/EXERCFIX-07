const Cliente = require('./Cliente');
const Prontuario = require('./Prontuario');
const Veterinario = require('./Veterinario');

class Animal {
  #nome;
  #especie;
  #cliente;
  #prontuario;
  #veterinarios = [];

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }

  getNome() {
    return this.#nome;
  }

  setEspecie(especie) {
    if (especie) {
      this.#especie = especie;
      return true;
    } else {
      return false;
    }
  }

  getEspecie() {
    return this.#especie;
  }

  setCliente(cliente) {
    if (cliente instanceof Cliente) {
      this.#cliente = cliente;
      cliente.addAnimal(this);
      return true;
    } else {
      return false;
    }
  }

  getCliente() {
    return this.#cliente;
  }

  setProntuario(prontuario) {
    if (prontuario instanceof Prontuario) {
      this.#prontuario = prontuario;
      prontuario.setAnimal(this);
      return true;
    } else {
      return false;
    }
  }

  getProntuario() {
    return this.#prontuario;
  }

  addVeterinarios(veterinario) {
    if (veterinario instanceof Veterinario) {
      this.#veterinarios.push(veterinario);
      veterinario.addAnimal(this);
      return true;
    } else {
      return false;
    }
  }

  getVeterinarios() {
    return this.#veterinarios;
  }

  listarVeterinarios() {
    console.log(this.getVeterinarios());
  }
}
