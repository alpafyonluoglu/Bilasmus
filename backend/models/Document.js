class Document {
    #name;
    #ownerId;
    #uploadDate;
    #size;
    #path;

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

    #tableName = "Document";
    #relations = [
        {
            col: "Name",
            set: this.setName,
            get: this.getName
        },
        {
            col: "ownerID",
            set: this.setOwnerId,
            get: this.getOwnerId
        },
        {
            col: "uploadDate",
            set: this.setUploadDate,
            get: this.getUploadDate
        },
        {
            col: "size",
            set: this.setSize,
            get: this.getSize
        },
        {
            col: "path",
            set: this.setPath,
            get: this.getPath
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = Document;