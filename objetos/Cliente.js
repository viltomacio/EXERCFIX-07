class Cliente {
  #nome;
  #telefone;
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

  setTelefone(telefone) {
    if (telefone) {
      this.#telefone = telefone;
      return true;
    } else {
      return false;
    }
  }

  getTelefone() {
    return this.#telefone;
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
    if (animal.getCliente() !== this) {
      animal.setCliente(this);
    }
    return true;
  }

  getAnimais() {
    return this.#animais;
  }

  listarAnimais() {
    console.log(this.getAnimais());
  }
}

module.exports = Cliente;
