'use strict';

const { json } = require("express");

// DOM : Document Object Model 

const id = document.querySelector("#id"),
    pswd = document.querySelector("#pswd"),
    loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pswd: pswd.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    });

}
