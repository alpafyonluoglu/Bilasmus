class PreApprovedCourse {
    #hostUniversityName;
    #hostUniversityDepartment;
    #hostUniversityCourseCode;
    #hostUniversityCourseName;
    #ects;
    #bilkentDepartment;
    #bilkentCourseCode;
    #bilkentCourseName;
    #bilkentCourseCredit;

    setHostUniversityName(hostUniversityName) {
        this.#hostUniversityName = hostUniversityName;
        return this;
    }
    setHostUniversityDepartment(hostUniversityDepartment) {
        this.#hostUniversityDepartment = hostUniversityDepartment;
        return this;
    }
    setHostUniversityCourseCode(hostUniversityCourseCode) {
        this.#hostUniversityCourseCode = hostUniversityCourseCode;
        return this;
    }
    setHostUniversityCourseName(hostUniversityCourseName) {
        this.#hostUniversityCourseName = hostUniversityCourseName;
        return this;
    }
    setEcts(ects) {
        this.#ects = ects;
        return this;
    }
    setBilkentDepartment(bilkentDepartment) {
        this.#bilkentDepartment = bilkentDepartment;
        return this;
    }
    setBilkentCourseCode(bilkentCourseCode) {
        this.#bilkentCourseCode = bilkentCourseCode;
        return this;
    }
    setBilkentCourseName(bilkentCourseName) {
        this.#bilkentCourseName = bilkentCourseName;
        return this;
    }
    setBilkentCourseCredit(bilkentCourseCredit) {
        this.#bilkentCourseCredit = bilkentCourseCredit;
        return this;
    }

    getHostUniversityName() {
        return this.#hostUniversityName;
    }
    getHostUniversityDepartment() {
        return this.#hostUniversityDepartment;
    }
    getHostUniversityCourseCode() {
        return this.#hostUniversityCourseCode;
    }
    getHostUniversityCourseName() {
        return this.#hostUniversityCourseName;
    }
    getEcts() {
        return this.#ects;
    }
    getBilkentDepartment() {
        return this.#bilkentDepartment;
    }
    getBilkentCourseCode() {
        return this.#bilkentCourseCode;
    }
    getBilkentCourseName() {
        return this.#bilkentCourseName;
    }
    getBilkentCourseCredit() {
        return this.#bilkentCourseCredit;
    }
}

module.exports = PreApprovedCourse;