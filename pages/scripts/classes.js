export class User {
    constructor(userId, fullName, password, email, github, linkedIn, age, education, aboutParagraph) {
        this.userId = userId;
        this.fullName = fullName;
        this.password = password;
        this.email = email;
        this.github = github;
        this.linkedIn = linkedIn;
        this.age = age;
        this.education = education;
        this.aboutParagraph = aboutParagraph;
    }
}


export function initLocalStorage() {
    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
}