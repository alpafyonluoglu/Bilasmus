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
            set: (val) => this.setName(val),
            get: () => this.getName()
        },
        {
            col: "Surname",
            set: (val) => this.setSurname(val),
            get: () => this.getSurname()
        },
        {
            col: "Bilkent ID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        },
        {
            col: "email",
            set: (val) => this.setEmail(val),
            get: () => this.getEmail()
        },
        {
            col: "department",
            set: (val) => this.setDepartment(val),
            get: () => this.getDepartment()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Coordinator();
    }
}

module.exports = Coordinator;