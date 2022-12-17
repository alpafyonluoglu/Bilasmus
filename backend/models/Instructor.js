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
            col: "department",
            set: (val) => this.setDepartment(val),
            get: () => this.getDepartment()
        },
        {
            col: "coursesResponsible",
            add: (val) => this.addCourse(val),
            get: () => this.getCourses()
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
        return new Instructor();
    }
}

module.exports = Instructor;