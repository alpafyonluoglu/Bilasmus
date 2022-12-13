class LoginService {
    verifyPassword(email, password) {
        // Check whether email and password match or not
        // TODO: DB connection
        return true;
    }

    getUserId(email) {
        // TODO: DB connection

        // Dummy users
        let userID;
        switch (email) {
            case "staff":
                userID = 1;
                break;
            case "outgoing":
                userID = 2;
                break;
            case "incoming":
                userID = 3;
                break;
            default:
                userID = false;
        }

        return userID;
    }
}

module.exports = new LoginService();