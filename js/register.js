var userName = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var password = document.getElementById("password");
var btnRegister = document.getElementById("btnRegister");
let textErrs = document.querySelector(".text-err");

btnRegister.addEventListener("click", (eo) => {
    eo.preventDefault();
    if(userName.value === "" || phone.value === "" || email === "" || password === ""){
        textErrs.style.display = "block";
        textErrs.innerHTML = "Please fill your data!";
    }else{
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(() => {
            location.href = "login.html";
        }, 1000);
    }
})