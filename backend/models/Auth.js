const Model = require("./Model");

class Auth extends Model {
    #id;
    #email;
    #password;
    #type;
    #emailToken;

    setId(id) {
        this.#id = id;
        return this;
    }
    setEmail(email) {
        this.#email = email;
        return this;
    }
    setPassword(password) {
        this.#password = password;
        return this;
    }
    setType(type) {
        this.#type = type;
        return this;
    }
    setEmailToken(emailToken) {
        this.#emailToken = emailToken;
        return this;
    }

    getId() {
        return this.#id;
    }
    getEmail() {
        return this.#email;
    }
    getPassword() {
        return this.#password;
    }
    getType() {
        return this.#type;
    }
    getEmailToken() {
        return this.#emailToken;
    }

    #tableName = "authData";
    #relations = [
        {
            col: "ID",
            set: (val) => this.setId(val),
            get: () => this.getId()
        },
        {
            col: "email",
            set: (val) => this.setEmail(val),
            get: () => this.getEmail()
        },
        {
            col: "password",
            set: (val) => this.setPassword(val),
            get: () => this.getPassword()
        },
        {
            col: "Type",
            set: (val) => this.setType(val),
            get: () => this.getType()
        },
        {
            col: "emailToken",
            set: (val) => this.setEmailToken(val),
            get: () => this.getEmailToken()
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }

    clone() {
        return new Auth();
    }
}

module.exports = Auth;