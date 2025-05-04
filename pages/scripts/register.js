import { User } from "./classes.js";
let users = JSON.parse(localStorage.getItem("users"));
// Making sure the button will load before the function
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rgtBtn").addEventListener("click", register_handler);
});

// Function to insert the user details to the localstorage
function register_handler(event) {
  event.preventDefault();
  if (
    users.some(
      (u) =>
        u.fullName === document.getElementById("fullName").value ||
        u.email === document.getElementById("email").value
    )
  ) {
    alert("username or email already exists");
    return;
  }

  let lastUserId = users[users.length - 1];
  if (!lastUserId) {
    //the first user
    lastUserId = 0;
  } else {
    lastUserId = lastUserId.userId;
  }
  let isWeather = false;
  let isExchange = false;
  if (document.getElementById("weather").checked) {
    isWeather = true;
  }
  if (document.getElementById("exchange").checked) {
    isExchange = true;
  }
  let newUser = new User(
    lastUserId + 1,
    document.getElementById("fullName").value,
    document.getElementById("password").value,
    document.getElementById("email"),
    document.getElementById("github").value,
    document.getElementById("linkedIn").value,
    document.getElementById("age").value,
    document.getElementById("education").value,
    document.getElementById("aboutParagraph").value,
    document.getElementById("skills").value.split(","),
    document.getElementById("picture").value,
    isWeather,
    isExchange
  );
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  document.location.href = "login.html";
}
