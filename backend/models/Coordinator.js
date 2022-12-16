const User = require("./User");

class Coordinator extends User {
    #department;

    setDepartment(department) {
        this.#department = department;
        return this;
    }

    getDepartment() {
        return this.#department;
    }

    #tableName = "Coordinators";
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
            col: "Bilkent ID",
            set: this.setId,
            get: this.getId
        },
        {
            col: "email",
            set: this.setEmail,
            get: this.getEmail
        },
        {
            col: "department",
            set: this.setDepartment,
            get: this.getDepartment
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = Coordinator;