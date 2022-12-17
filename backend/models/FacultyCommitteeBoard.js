const User = require("./User");

class FacultyCommitteeBoard extends User {
    #tableName = "fcb";
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
        return new FacultyCommitteeBoard();
    }
}

module.exports = FacultyCommitteeBoard;