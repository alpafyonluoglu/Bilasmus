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

    #tableName = "admin";
    _relations = [
        {	col: "Host University's Name",
            set: this.setHostUniversityName,
            get: this.getHostUniversityName
        },
        {	col: "Host University's Department/Program",
            set: this.setHostUniversityDepartment,
            get: this.getHostUniversityDepartment
        },
        {	col: "Host University's Course Code",
            set: this.setHostUniversityCourseCode,
            get: this.getHostUniversityCourseCode
        },
        {	col: "Host University's Course name",
            set: this.setHostUniversityCourseName,
            get: this.getHostUniversityCourseName
        },
        {	col: "ECTS",
            set: this.setEcts,
            get: this.getEcts
        },
        {	col: "Exempted Bilkent Course Code",
            set: this.setBilkentCourseCode,
            get: this.getBilkentCourseCode
        },
        {	col: "Exempted Bilkent Course Name",
            set: this.setBilkentCourseName,
            get: this.getBilkentCourseName
        },
        {	col: "Exempted Bilkent Course Credit",
            set: this.setBilkentCourseCredit,
            get: this.getBilkentCourseCredit
        },
        {	col: "Exempted Bilkent Course Designation",
            set: this.setBilkentDepartment,
            get: this.getBilkentDepartment
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this._relations;
    }
}

module.exports = PreApprovedCourse;