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

    #tableName = "IncomingStudents";
    #relations = [
        {
            col: "Name",
            set: this.setName,
            get: this.getName
        },
        {
            col: "Surname",
            set: this.setSurname,
            get: this.getSurname
        },
        {
            col: "Home University",
            set: this.setHostUniversity,
            get: this.getHostUniversity
        },
        {
            col: "Country",
            set: this.setCountry,
            get: this.getCountry
        },
        {
            col: "e-mail",
            set: this.setEmail,
            get: this.getEmail
        },
        {
            col: "Bilkent ID",
            set: this.setId,
            get: this.getId
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = IncomingStudent;