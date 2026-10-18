class Veterinario {
  #nome;
  #crmv;
  #animais = [];

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

  setCrmv(crmv) {
    if (crmv) {
      this.#crmv = crmv;
      return true;
    } else {
      return false;
    }
  }

  getCrmv() {
    return this.#crmv;
  }

  addAnimal(animal) {
    const Animal = require('./Animal');

    if (!(animal instanceof Animal)) {
      return false;
    }
    if (this.#animais.includes(animal)) {
      return false;
    }

    this.#animais.push(animal);
    animal.addVeterinarios(this);
    return true;
  }

  getAnimais() {
    return this.#animais;
  }
}

module.exports = Veterinario;
