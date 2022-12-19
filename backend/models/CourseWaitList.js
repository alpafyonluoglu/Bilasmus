const PreApprovedCourse = require("./PreApprovedCourse");

class CourseWaitList extends PreApprovedCourse {
    static #instance = null;

    // Assume private constructor
    // Private constructor for singleton design pattern

    static getCourseWaitList() {
        if (this.#instance === null) {
            this.#instance = new CourseWaitList();
        }
        return this.#instance;
    }

    #tableName = "coursesWaitingList";
    #primaryKey = "ID";
    getTableName() {
        return this.#tableName;
    }
    getPrimaryKey() {
        return this.#primaryKey;
    }
    getRelations() {
        return super._relations;
    }

    clone() {
        return new CourseWaitList();
    }
}

module.exports = CourseWaitList;