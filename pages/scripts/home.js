import {initLocalStorage} from "./classes.js";
initLocalStorage();
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) {//not logged in
    document.getElementById("containerHello").style.display = "block";
    document.getElementById("containerUser").style.display = "none";
    
}else {//logged in
    document.getElementById("containerHello").style.display = "none";
    document.getElementById("containerUser").style.display = "block";
    if(currentUser.isWeather) {
        document.getElementById("containerWeather").style.display = "block";
    }else {
        document.getElementById("containerWeather").style.display = "none";
    }
    if(currentUser.isExchange) {
        document.getElementById("containerExchange").style.display = "block";
    } else {
        document.getElementById("containerExchange").style.display = "none";
    }
}