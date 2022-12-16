const PreApprovedCourse = require("./PreApprovedCourse");

class CourseWaitList extends PreApprovedCourse {
    static #instance = null;

    #constructor() {
        // Private constructor for singleton design pattern
    }

    static getCourseWaitList() {
        if (this.#instance === null) {
            this.#instance = new CourseWaitList();
        }
        return this.#instance;
    }

    #tableName = "coursesWaitingList";
    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return super._relations;
    }
}

module.exports = CourseWaitList;