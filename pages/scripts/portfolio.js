export function fillPortfolio(id) {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    //not logged in
    alert("You are not logged in. Please log in to view your portfolio.");
    return;
  } else {
    //logged in
    const container = document.getElementById(`containerPortfolio${id}`);
    container.querySelector("#fullName").innerText = currentUser.fullName;
    container.querySelector("#ageValue").innerText = currentUser.age;
    container.querySelector("#emailValue").innerText = currentUser.email;
    container.querySelector("#emailValue").href = `mailto:${currentUser.email}`;
    container.querySelector("#githubValue").innerText = currentUser.github;
    container.querySelector("#githubValue").href =
      `http://${currentUser.github}`;
    container.querySelector("#linkedInValue").innerText =
      currentUser.linkedIn;
      container.querySelector("#linkedInValue").href =
      `http://${currentUser.linkedIn}`;
    container.querySelector("#educationValue").innerText =
        currentUser.education;
    container.querySelector("#aboutMe").innerText = currentUser.aboutParagraph;
    container.querySelector("#skills").innerText = currentUser.skills;
    container.querySelector("#profilePicture").src = currentUser.picture;
  }
}

const radioButtons = document.querySelectorAll('input[name="options"]');
export function updateVisiblePortfolio() {
  radioButtons.forEach((radio) => {
    const container = document.getElementById(
      `containerPortfolio${radio.value}`
    );
    if (radio.checked) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}
