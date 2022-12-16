class Auth {
    #id;
    #email;
    #password;
    #type;

    setId(id) {
        this.#id = id;
        return this;
    }
    setEmail(email) {
        this.#email = email;
        return this;
    }
    setPassword(password) {
        this.#password = password;
        return this;
    }
    setType(type) {
        this.#type = type;
        return this;
    }

    getId() {
        return this.#id;
    }
    getEmail() {
        return this.#email;
    }
    getPassword() {
        return this.#password;
    }
    getType() {
        return this.#type;
    }
}

module.exports = Auth;