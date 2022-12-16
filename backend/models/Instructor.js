const User = require("./User");

class Instructor extends User {
    #department;
    #coursesResponsible = [];

    setDepartment(department) {
        this.#department = department;
        return this;
    }

    addCourse(course) {
        this.#coursesResponsible.push(course);
        return this;
    }

    getDepartment() {
        return this.#department;
    }
    getCourses() {
        return this.#coursesResponsible;
    }
}

module.exports = Instructor;