'user strict';

class UserStorage {
    // '#' = public variable -> private variable
    static #users = {
        id: ["Udada", "김개발", "이설계"],
        pswd: ["1234", "1111", "4321"],
        name: ["우다다", "김개발", "이설계"],
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
    };
    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pswd, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    };
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pswd.push(userInfo.pswd);
        return { success: true };
    };
}

module.exports = UserStorage;