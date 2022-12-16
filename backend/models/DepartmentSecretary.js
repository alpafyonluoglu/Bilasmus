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
}

module.exports = DepartmentSecretary;