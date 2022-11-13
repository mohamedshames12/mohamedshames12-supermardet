let btnLogin = document.getElementById("btnLogin");
let textErrs = document.querySelector(".text-err");

// from login.html
let emailDom = document.getElementById("email");
let passwordDom = document.getElementById("password");


// from localStorage
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");




btnLogin.addEventListener("click", (eo) => {
    eo.preventDefault();
    if(emailDom.value === "" || passwordDom.value === ""){
        textErrs.style.display = "block";
        textErrs.innerHTML = "Please fill your data!";
    }else{
        if(getEmail && getEmail.trim() === emailDom.value.trim() && getPassword && getPassword.trim() === passwordDom.value){
            setTimeout(() => { 
                location.href = "pages/home.html";
             }, 1000)
        }else{
            textErrs.style.display = "block";
            textErrs.innerHTML = "email or passsword is incorrect!!";
        }
    }
})
