const Model = require("./Model");

class WaitList extends Model {
    static #instance = null;

    #studentId;
    #faculty;
    #department;
    #degree;
    #totalPoints;
    #preferredUniversity1;
    #preferredUniversity2;
    #preferredUniversity3;
    #preferredUniversity4;

    #constructor()
    {
        // private constructor. Left empty for Singleton design pattern rules.
    }

    static getWaitList() {
        if (this.#instance === null) {
            this.#instance = new WaitList();
        }
        return this.#instance;
    }

    setStudentId(studentId) {
        this.#studentId = studentId;
        return this;
    }
    setFaculty(faculty) {
        this.#faculty = faculty;
        return this;
    }
    setDepartment(department) {
        this.#department = department;
        return this;
    }
    setDegree(degree) {
        this.#degree = degree;
        return this;
    }
    setTotalPoints(totalPoints) {
        this.#totalPoints = totalPoints;
        return this;
    }
    setPreferredUniversity1(preferredUniversity1) {
        this.#preferredUniversity1 = preferredUniversity1;
        return this;
    }
    setPreferredUniversity2(preferredUniversity2) {
        this.#preferredUniversity2 = preferredUniversity2;
        return this;
    }
    setPreferredUniversity3(preferredUniversity3) {
        this.#preferredUniversity3 = preferredUniversity3;
        return this;
    }
    setPreferredUniversity4(preferredUniversity4) {
        this.#preferredUniversity4 = preferredUniversity4;
        return this;
    }

    getStudentId() {
        return this.#studentId;
    }
    getFaculty() {
        return this.#faculty;
    }
    getDepartment() {
        return this.#department;
    }
    getDegree() {
        return this.#degree;
    }
    getTotalPoints() {
        return this.#totalPoints;
    }
    getPreferredUniversity1() {
        return this.#preferredUniversity1;
    }
    getPreferredUniversity2() {
        return this.#preferredUniversity2;
    }
    getPreferredUniversity3() {
        return this.#preferredUniversity3;
    }
    getPreferredUniversity4() {
        return this.#preferredUniversity4;
    }

    static getInstance()
    {
        if (this.#instance)
        {
            return this.#instance;
        }
    }


        #tableName = "WaitList";
    #primaryKey = "Student ID Number";
    #relations = [
        {	col: "Student ID Number",
            set: (val) => this.setStudentId(val),
            get: () => this.getStudentId()
        },
        {	col: "Faculty",
            set: (val) => this.setFaculty(val),
            get: () => this.getFaculty()
        },
        {	col: "Department",
            set: (val) => this.setDepartment(val),
            get: () => this.getDepartment()
        },
        {	col: "Degree",
            set: (val) => this.setDegree(val),
            get: () => this.getDegree()
        },
        {	col: "Total Points",
            set: (val) => this.setTotalPoints(val),
            get: () => this.getTotalPoints()
        },
        {	col: "Preferred University #1",
            set: (val) => this.setPreferredUniversity1(val),
            get: () => this.getPreferredUniversity1()
        },
        {	col: "Preferred University #2",
            set: (val) => this.setPreferredUniversity2(val),
            get: () => this.getPreferredUniversity2()
        },
        {	col: "Preferred University #3",
            set: (val) => this.setPreferredUniversity3(val),
            get: () => this.getPreferredUniversity3()
        },
        {	col: "Preferred University #4",
            set: (val) => this.setPreferredUniversity4(val),
            get: () => this.getPreferredUniversity4()
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
        return new WaitList();
    }
}

module.exports = WaitList;