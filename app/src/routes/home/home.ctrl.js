'use strict';

const UserStorage = require("../../models/UserStorage");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pswd = req.body.pswd;

        const users = UserStorage.getUsers("id", "pswd");

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pswd[idx] === pswd) {
                response.sucess = true;
                return res.json(response);
            }
        }
        response.sucess = false;
        response.msg = "로그인에 실패했습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
