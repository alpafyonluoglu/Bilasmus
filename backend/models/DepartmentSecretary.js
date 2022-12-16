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
            col: "e-mail",
            set: this.setEmail,
            get: this.getEmail
        },
        {
            col: "Department",
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

module.exports = DepartmentSecretary;