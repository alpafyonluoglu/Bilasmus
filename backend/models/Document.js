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
}

module.exports = Document;