const User = require("./User");

class OutgoingStudent extends User {
    #tableName = "admin";
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

module.exports = OutgoingStudent;