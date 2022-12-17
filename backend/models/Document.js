const Model = require("./Model");

class Document extends Model {
    #name;
    #ownerId;
    #uploadDate;
    #size;
    #path;
    #type;

    setName(name) {
        this.#name = name;
        return this;
    }
    setOwnerId(ownerId) {
        this.#ownerId = ownerId;
        return this;
    }
    setUploadDate(uploadDate) {
        this.#uploadDate = uploadDate;
        return this;
    }
    setSize(size) {
        this.#size = size;
        return this;
    }
    setPath(path) {
        this.#path = path;
        return this;
    }
    setType(type) {
        this.#type = type;
        return this;
    }

    getName() {
        return this.#name;
    }
    getOwnerId() {
        return this.#ownerId;
    }
    getUploadDate() {
        return this.#uploadDate;
    }
    getSize() {
        return this.#size;
    }
    getPath() {
        return this.#path;
    }
    getType() {
        return this.#type;
    }

    #tableName = "Document";
    #relations = [
        {
            col: "Name",
            set: (val) => this.setName(val),
            get: () => this.getName()
        },
        {
            col: "ownerID",
            set: (val) => this.setOwnerId(val),
            get: () => this.getOwnerId()
        },
        {
            col: "uploadDate",
            set: (val) => this.setUploadDate(val),
            get: () => this.getUploadDate()
        },
        {
            col: "size",
            set: (val) => this.setSize(val),
            get: () => this.getSize()
        },
        {
            col: "path",
            set: (val) => this.setPath(val),
            get: () => this.getPath()
        },
        {
            col: "type",
            set: (val) => this.setType(val),
            get: () => this.getType()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Document();
    }
}

module.exports = Document;