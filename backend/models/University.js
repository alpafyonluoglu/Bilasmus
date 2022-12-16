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
}

module.exports = University;