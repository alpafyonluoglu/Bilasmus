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
            set: this.setName,
            get: this.getName
        },
        {
            col: "Lastname",
            set: this.setSurname,
            get: this.getSurname
        },
        {
            col: "Student ID Number",
            set: this.setId,
            get: this.getId
        },
        {
            col: "Total Points",
            set: this.setTotalPoint,
            get: this.getTotalPoint
        },
        {
            col: "Duration Preferred",
            set: this.setDurationPreferred,
            get: this.getDurationPreferred
        },
        {
            col: "Placement Notes",
            set: this.setPlacementNotes,
            get: this.getPlacementNotes
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = OutgoingStudent;