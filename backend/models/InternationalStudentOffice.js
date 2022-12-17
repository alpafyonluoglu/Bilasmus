const User = require("./User");

class InternationalStudentOffice extends User {
    #tableName = "internationalStudentOffice";
    #primaryKey = "ID";

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
            col: "email",
            set: (val) => this.setEmail(val),
            get: () => this.getEmail()
        },
        {
            col: "ID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getPrimaryKey() {
        return this.#primaryKey;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new InternationalStudentOffice();
    }
}

module.exports = InternationalStudentOffice;