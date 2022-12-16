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
    setName(name, surname) {
        this.#name = name;
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
    getName() {
        return this.#name + " " + this.#surname;
    }
    getEmail() {
        return this.#email;
    }
    getMessages() {
        return this.#messages;
    }
}

module.exports = User;