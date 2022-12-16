const User = require("./User");

class IncomingStudent extends User {
    #hostUniversity;
    #country;

    setHostUniversity(hostUniversity) {
        this.#hostUniversity = hostUniversity;
        return this;
    }
    setCountry(country) {
        this.#country = country;
        return this;
    }

    getHostUniversity() {
        return this.#hostUniversity;
    }
    getCountry() {
        return this.#country;
    }
}

module.exports = IncomingStudent;