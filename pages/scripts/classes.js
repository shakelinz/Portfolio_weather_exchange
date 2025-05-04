export class User {
    constructor(userId, fullName, password, email, github, linkedIn, age, education, aboutParagraph, skills, picture, isWeather, isExchange) {
        this.userId = userId;
        this.fullName = fullName;
        this.password = password;
        this.email = email;
        this.github = github;
        this.linkedIn = linkedIn;
        this.age = age;
        this.education = education;
        this.aboutParagraph = aboutParagraph;
        this.skills = skills;
        this.picture = picture;
        this.isWeather = isWeather;
        this.isExchange = isExchange;    
    }
}


export function initLocalStorage() {
    if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
}