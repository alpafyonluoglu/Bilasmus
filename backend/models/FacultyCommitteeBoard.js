const User = require("./User");

class FacultyCommitteeBoard extends User {
    #tableName = "fcb";
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
            col: "email",
            set: this.setEmail,
            get: this.getEmail
        },
        {
            col: "ID",
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

module.exports = FacultyCommitteeBoard;