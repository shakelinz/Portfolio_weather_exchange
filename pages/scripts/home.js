import {initLocalStorage} from "./classes.js";
initLocalStorage();
let users = JSON.parse(localStorage.getItem("users"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) {//not logged in
    document.getElementById("containerHello").style.display = "block";
}else {//logged in
    document.getElementById("containerHello").style.display = "none";
}