import {initLocalStorage} from "./classes.js";
import {fillPortfolio, updateVisiblePortfolio} from "./portfolio.js";
const radioButtons = document.querySelectorAll('input[name="options"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    updateVisiblePortfolio();
    fillPortfolio(radio.value);
  });
});
initLocalStorage();
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(!currentUser) {//not logged in
    document.getElementById("containerHello").style.display = "block";
    document.getElementById("containerUser").style.display = "none";
    
}else {//logged in
    document.getElementById("containerHello").style.display = "none";
    document.getElementById("containerUser").style.display = "block";
    updateVisiblePortfolio();
    fillPortfolio(1);
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