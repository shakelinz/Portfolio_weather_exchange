export function fillPortfolio() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser) {//not logged in
        alert("You are not logged in. Please log in to view your portfolio.");
        return;
    }else {//logged in
        document.getElementById("profilePicture").src = currentUser.picture;
        document.getElementById("fullName").innerText = currentUser.fullName;
        document.getElementById("ageValue").innerText = currentUser.age;
        document.getElementById("emailValue").innerText = currentUser.email;
        document.getElementById("emailValue").href = `mailto:${currentUser.email}`;
        document.getElementById("githubValue").innerText = currentUser.github;
        document.getElementById("githubValue").href = `http://${currentUser.github}`;
        document.getElementById("linkedInValue").innerText = currentUser.linkedIn;
        document.getElementById("linkedInValue").href = `http://${currentUser.linkedIn}`;
        document.getElementById("educationValue").innerText = currentUser.education;
        document.getElementById("aboutMe").innerText = currentUser.aboutParagraph;
        document.getElementById("skills").innerText = currentUser.skills;
    }
}