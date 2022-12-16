class University {
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
            set: this.setId,
            get: this.getId
        },
        {
            col: "universityName",
            set: this.setName,
            get: this.getName
        },
        {
            col: "universityCountry",
            set: this.setCountry,
            get: this.getCountry
        },
        {
            col: "semestersAllowed",
            set: this.setSemestersAllowed,
            get: this.getSemestersAllowed
        },
        {
            col: "undergraduateAllowed",
            set: this.setUndergraduateAllowed,
            get: this.getUndergraduateAllowed
        },
        {
            col: "coursesInEnglish",
            set: this.setCoursesInEnglish,
            get: this.getCoursesInEnglish
        },
        {
            col: "languageReq",
            add: this.addLanguageReq,
            get: this.getLanguageReq
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = University;