// navber
var menuBtn = document.getElementById("menu");
var navber = document.querySelector(".navber");

menuBtn.addEventListener("click", (eo) => {
    eo.preventDefault();
    navber.classList.toggle("active");
})

window.onscroll = () => {
    navber.classList.remove("active");
}

// for user

var user = document.getElementById("user");
var userName = localStorage.getItem("userName");
if(userName){
    user.innerHTML = "<span id='user'>Welcome! </span>" +  userName ;
}


// for logout

var logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", (eo) => {
    localStorage.clear();
    setTimeout(() => { 
        location.href = "../login.html";
     }, 1000)
})

