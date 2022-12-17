const User = require("./User");

class DepartmentSecretary extends User {
    #department;

    setDepartment(department) {
        this.#department = department;
        return this;
    }

    getDepartment() {
        return this.#department;
    }

    #tableName = "DepartmentSecretaries";
    #primaryKey = "Bilkent ID";
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
            col: "e-mail",
            set: (val) => this.setEmail(val),
            get: () => this.getEmail()
        },
        {
            col: "Department",
            set: (val) => this.setDepartment(val),
            get: () => this.getDepartment()
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
        return new DepartmentSecretary();
    }
}

module.exports = DepartmentSecretary;