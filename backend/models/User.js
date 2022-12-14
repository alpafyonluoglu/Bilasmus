class User {
    #id;
    #name;
    #email;
    #messages = [];

    setId(id) {
        this.#id = id;
        return this;
    }
    setName(name) {
        this.#name = name;
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
        return this.#name;
    }
    getEmail() {
        return this.#email;
    }
    getMessages() {
        return this.#messages;
    }
}

module.exports = User;