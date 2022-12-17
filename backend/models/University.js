const Model = require("./Model");

class University extends Model {
    #id;
    #name;
    #country;
    #semestersAllowed;
    #undergraduateAllowed;
    #coursesInEnglish;
    #languageReq = [];

    setId(id) {
        this.#id = id;
        return this;
    }
    setName(name) {
        this.#name = name;
        return this;
    }
    setCountry(country) {
        this.#country = country;
        return this;
    }
    setSemestersAllowed(semestersAllowed) {
        this.#semestersAllowed = semestersAllowed;
        return this;
    }
    setUndergraduateAllowed(undergraduateAllowed) {
        this.#undergraduateAllowed = undergraduateAllowed;
        return this;
    }
    setCoursesInEnglish(coursesInEnglish) {
        this.#coursesInEnglish = coursesInEnglish;
        return this;
    }

    addLanguageReq(languageReq) {
        this.#languageReq.push(languageReq);
        return this;
    }

    getId() {
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    getCountry() {
        return this.#country;
    }
    getSemestersAllowed() {
        return this.#semestersAllowed;
    }
    getUndergraduateAllowed() {
        return this.#undergraduateAllowed;
    }
    getCoursesInEnglish() {
        return this.#coursesInEnglish;
    }
    getLanguageReq() {
        return this.#languageReq;
    }

    #tableName = "UniversityTable";
    #relations = [
        {
            col: "universityID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        },
        {
            col: "universityName",
            set: (val) => this.setName(val),
            get: () => this.getName()
        },
        {
            col: "universityCountry",
            set: (val) => this.setCountry(val),
            get: () => this.getCountry()
        },
        {
            col: "semestersAllowed",
            set: (val) => this.setSemestersAllowed(val),
            get: () => this.getSemestersAllowed()
        },
        {
            col: "undergraduateAllowed",
            set: (val) => this.setUndergraduateAllowed(val),
            get: () => this.getUndergraduateAllowed()
        },
        {
            col: "coursesInEnglish",
            set: (val) => this.setCoursesInEnglish(val),
            get: () => this.getCoursesInEnglish()
        },
        {
            col: "languageReq",
            add: (val) => this.addLanguageReq(val),
            get: () => this.getLanguageReq()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new University();
    }
}

module.exports = University;