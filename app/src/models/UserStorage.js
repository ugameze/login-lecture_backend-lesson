'user strict';

class UserStorage {
    // '#' = public variable -> private variable
    static #users = {
        id: ["Udada", "김개발", "이설계"],
        pswd: ["1234", "1111", "4321"],
        names: ["우다다", "김개발", "이설계"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;