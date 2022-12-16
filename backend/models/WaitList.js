class WaitList {
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

    #constructor() {
        // Private constructor for singleton design pattern
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

    #tableName = "WaitList";
    #relations = [
        {	col: "Student ID Number",
            set: this.setStudentId,
            get: this.getStudentId
        },
        {	col: "Faculty",
            set: this.setFaculty,
            get: this.getFaculty
        },
        {	col: "Department",
            set: this.setDepartment,
            get: this.getDepartment
        },
        {	col: "Degree",
            set: this.setDegree,
            get: this.getDegree
        },
        {	col: "Total Points",
            set: this.setTotalPoints,
            get: this.getTotalPoints
        },
        {	col: "Preferred University #1",
            set: this.setPreferredUniversity1,
            get: this.getPreferredUniversity1
        },
        {	col: "Preferred University #2",
            set: this.setPreferredUniversity2,
            get: this.getPreferredUniversity2
        },
        {	col: "Preferred University #3",
            set: this.setPreferredUniversity3,
            get: this.getPreferredUniversity3
        },
        {	col: "Preferred University #4",
            set: this.setPreferredUniversity4,
            get: this.getPreferredUniversity4
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = WaitList;