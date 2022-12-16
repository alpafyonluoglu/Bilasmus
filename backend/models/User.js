class User {
    #id;
    #name;
    #surname;
    #email;
    #messages = [];

    setId(id) {
        this.#id = id;
        return this;
    }
    setFullName(name, surname) {
        this.#name = name;
        this.#surname = surname;
        return this;
    }
    setName(name) {
        this.#name = name;
        return this;
    }
    setSurname(surname) {
        this.#surname = surname;
        return this;
    }
    setEmail(email) {
        this.#email = email;
        return this;
    }

    addMessage(message) {
        this.#messages.push(message);
        return this;
    }

    getId() {
        return this.#id;
    }
    getFullName() {
        return this.#name + " " + this.#surname;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getEmail() {
        return this.#email;
    }
    getMessages() {
        return this.#messages;
    }
}

module.exports = User;