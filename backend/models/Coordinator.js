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
}

module.exports = Coordinator;