class Model {
    #tableName = "";
    #relations = [];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Model();
    }
}

module.exports = Model;