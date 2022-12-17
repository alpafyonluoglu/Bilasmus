const User = require("./User");

class Admin extends User {
    #tableName = "admin";
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
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Admin();
    }
}

module.exports = Admin;