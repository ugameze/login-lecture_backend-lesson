'use strict';

const users = {
    id: ["Udada", "김개발", "이설계"],
    pswd: ["1234", "1111", "4321"],
};

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

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pswd[idx] === pswd) {
                return res.json({
                    sucess: true,
                });
            }

        }

        return res.json({
            sucess: false,
            msg: "로그인에 실패했습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};