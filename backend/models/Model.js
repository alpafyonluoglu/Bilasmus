class Model {
    #tableName = "";
    #primaryKey = "";
    #relations = [];

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
        return new Model();
    }
}

module.exports = Model;