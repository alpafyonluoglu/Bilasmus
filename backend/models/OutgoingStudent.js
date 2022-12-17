const User = require("./User");

class OutgoingStudent extends User {
    #totalPoint;
    #durationPreferred;
    #placementNotes;

    setTotalPoint(totalPoint) {
        this.#totalPoint = totalPoint;
        return this;
    }
    setDurationPreferred(durationPreferred) {
        this.#durationPreferred = durationPreferred;
        return this;
    }

    setPlacementNotes(placementNotes) {
        this.#placementNotes = placementNotes;
        return this;
    }

    getTotalPoint() {
        return this.#totalPoint;
    }
    getDurationPreferred() {
        return this.#durationPreferred;
    }
    getPlacementNotes() {
        return this.#placementNotes;
    }

    #tableName = "OutgoingStudents";
    #relations = [
        {
            col: "First Name",
            set: (val) => this.setName(val),
            get: () => this.getName()
        },
        {
            col: "Lastname",
            set: (val) => this.setSurname(val),
            get: () => this.getSurname()
        },
        {
            col: "Student ID Number",
            set: (val) => this.setId(val),
            get: () => this.getId()
        },
        {
            col: "Total Points",
            set: (val) => this.setTotalPoint(val),
            get: () => this.getTotalPoint()
        },
        {
            col: "Duration Preferred",
            set: (val) => this.setDurationPreferred(val),
            get: () => this.getDurationPreferred()
        },
        {
            col: "Placement Notes",
            set: (val) => this.setPlacementNotes(val),
            get: () => this.getPlacementNotes()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new OutgoingStudent();
    }
}

module.exports = OutgoingStudent;