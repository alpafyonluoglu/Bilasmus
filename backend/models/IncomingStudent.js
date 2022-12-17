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
            set: (val) => this.setName(val),
            get: () => this.getName()
        },
        {
            col: "Surname",
            set: (val) => this.setSurname(val),
            get: () => this.getSurname()
        },
        {
            col: "Home University",
            set: (val) => this.setHostUniversity(val),
            get: () => this.getHostUniversity()
        },
        {
            col: "Country",
            set: (val) => this.setCountry(val),
            get: () => this.getCountry()
        },
        {
            col: "e-mail",
            set: (val) => this.setEmail(val),
            get: () => this.getEmail()
        },
        {
            col: "Bilkent ID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new IncomingStudent();
    }
}

module.exports = IncomingStudent;