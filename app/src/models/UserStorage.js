'user strict';

const db = require("../config/db");
class UserStorage {
    static getUsersInfo(id) {
        const query = "SELECT * FROM users WHERE id = ?;";
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    };

    static async save(userInfo) {
        const query = "INSERT INTO users(id, name, pswd) VALUES(?, ?, ?);";
        return new Promise((resolve, reject) => {
            db.query(query,
                [userInfo.id, userInfo.name, userInfo.pswd],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    };
    // static async save(userInfo) {
    //     const users = await this.getUsers(true);
    //     // const users = await this.getUsers("id", "pswd", "name");

    //     if (users.id.includes(userInfo.id)) {
    //         throw "이미 존재하는 아이디입니다.";
    //     }
    //     users.id.push(userInfo.id);
    //     users.name.push(userInfo.name);
    //     users.pswd.push(userInfo.pswd);
    //     // 데이터 추가
    //     fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    //     return { success: true };
    // };

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if (isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if (users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     return newUsers;
    // }

    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users); // => [id, pswd, name]
    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     }, {});
    //     return userInfo;
    // }

    // static getUsers(isAll, ...fields) { };

}

module.exports = UserStorage;