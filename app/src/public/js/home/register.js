'use strict';

// DOM : Document Object Model 

const id = document.querySelector("#id"),
    names = document.querySelector("#name"),
    pswd = document.querySelector("#pswd"),
    confirmPswd = document.querySelector("#confirm-pswd"),
    registerBtn = document.querySelector("#registerBtn");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (pswd.value !== confirmPswd.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: names.value,
        pswd: pswd.value,
    };

    fetch("/register", {
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
            console.log(res);
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생");
        });
}
