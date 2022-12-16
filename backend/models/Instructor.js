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

    #tableName = "Instructors";
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
            col: "department",
            set: this.setDepartment,
            get: this.getDepartment
        },
        {
            col: "coursesResponsible",
            add: this.addCourse,
            get: this.getCourses
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = Instructor;