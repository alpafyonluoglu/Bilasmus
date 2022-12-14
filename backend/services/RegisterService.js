class RegisterService {
    generateRegistrationToken(email, callback) {
        const token = this.#generateToken(32);

        // TODO: DB connection (save email & token link to DB)
        return callback(token);
    }

    #generateToken(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let token = '';
        for (let i = 0; i < length; i++) {
            token += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return token;
    }
}

module.exports = new RegisterService();