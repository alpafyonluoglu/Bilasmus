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
}

module.exports = OutgoingStudent;