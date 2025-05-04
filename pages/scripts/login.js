// Function to insert the user details to the localstorage
function login(event) {
  event.preventDefault();
  let users = JSON.parse(localStorage.getItem("users"));
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    document.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
    
}