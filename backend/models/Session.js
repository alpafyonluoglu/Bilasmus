const Model = require("./Model");

class Session extends Model {
    #sessionID;
    #userID;
    #type;

    setSessionID(sessionID) {
        this.#sessionID = sessionID;
        return this;
    }
    setUserID(userID) {
        this.#userID = userID;
        return this;
    }
    setType(type) {
        this.#type = type;
        return this;
    }

    getSessionID() {
        return this.#sessionID;
    }
    getUserID() {
        return this.#userID;
    }
    getType() {
        return this.#type;
    }

    #tableName = "sessions";
    #primaryKey = "sessionID";
    #relations = [
        {
            col: "sessionID",
            set: (val) => this.setSessionID(val),
            get: () => this.getSessionID()
        },
        {
            col: "userID",
            set: (val) => this.setUserID(val),
            get: () => this.getUserID()
        },
        {
            col: "Type",
            set: (val) => this.setType(val),
            get: () => this.getType()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getPrimaryKey() {
        return this.#primaryKey;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Session();
    }
}

module.exports = Session;