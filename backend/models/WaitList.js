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
}

module.exports = WaitList;