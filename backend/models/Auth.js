class Auth {
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
            set: this.setId,
            get: this.getId
        },
        {
            col: "email",
            set: this.setEmail,
            get: this.getEmail
        },
        {
            col: "password",
            set: this.setPassword,
            get: this.getPassword
        },
        {
            col: "Type",
            set: this.setType,
            get: this.getType
        },
        {
            col: "emailToken",
            set: this.setEmailToken,
            get: this.getEmailToken
        }
    ];

    getTableName() {
        return this.#tableName;
    }
    getRelations() {
        return this.#relations;
    }
}

module.exports = Auth;