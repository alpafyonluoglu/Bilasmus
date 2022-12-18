const Model = require("./Model");

class PreApprovedCourse extends Model {
    #hostUniversityName;
    #hostUniversityDepartment;
    #hostUniversityCourseCode;
    #hostUniversityCourseName;
    #ects;
    #bilkentDepartment;
    #bilkentCourseCode;
    #bilkentCourseName;
    #bilkentCourseCredit;
    #id;
    #sllyabusLink;

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
    setId(id) {
        this.#id = id;
        return this;
    }

    setSllyabusLink(sllyabusLink) {
        this.#sllyabusLink = sllyabusLink;
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
    getId() {
        return this.#id;
    }

    getSllyabus()
    {
        return this.#sllyabusLink;
    }

    #tableName = "PreApprovedCourses";
    #primaryKey = "ID";
    _relations = [
        {	col: "Host University's Name",
            set: (val) => this.setHostUniversityName(val),
            get: () => this.getHostUniversityName()
        },
        {	col: "Host University's Department/Program",
            set: (val) => this.setHostUniversityDepartment(val),
            get: () => this.getHostUniversityDepartment()
        },
        {	col: "Host University's Course Code",
            set: (val) => this.setHostUniversityCourseCode(val),
            get: () => this.getHostUniversityCourseCode()
        },
        {	col: "Host University's Course name",
            set: (val) => this.setHostUniversityCourseName(val),
            get: () => this.getHostUniversityCourseName()
        },
        {	col: "ECTS",
            set: (val) => this.setEcts(val),
            get: () => this.getEcts()
        },
        {	col: "Exempted Bilkent Course Code",
            set: (val) => this.setBilkentCourseCode(val),
            get: () => this.getBilkentCourseCode()
        },
        {	col: "Exempted Bilkent Course Name",
            set: (val) => this.setBilkentCourseName(val),
            get: () => this.getBilkentCourseName()
        },
        {	col: "Exempted Bilkent Course Credit",
            set: (val) => this.setBilkentCourseCredit(val),
            get: () => this.getBilkentCourseCredit()
        },
        {	col: "Exempted Bilkent Course Designation",
            set: (val) => this.setBilkentDepartment(val),
            get: () => this.getBilkentDepartment()
        },
        {	col: "ID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        },
        {
            col: "sllyabusLink",
            set: (val) => this.setSllyabus(val),
            get: () => this.getSllyabus()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getPrimaryKey() {
        return this.#primaryKey;
    }
    getRelations() {
        return this._relations;
    }

    clone() {
        return new PreApprovedCourse();
    }
}

module.exports = PreApprovedCourse;