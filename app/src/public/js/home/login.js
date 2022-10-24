'use strict';

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
    })
        .then((res) => res.json())
        // .then((res) => console.log(res)); === .then(console.log);
        // parameter가 같을 경우 생략 가능하다
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}
