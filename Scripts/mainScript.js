// Dynamic text Intro section
const dynamicSpan = document.querySelector(".dynamicPhrase");
const cursorBlink = document.querySelector(".cursor");

const typewriter = [
    "Hello, नमस्कार!",
    "I am Sachin Meena.",
    "Welcome to my Portfolio.",
    "Let me walk you through my profile.",
];
const typingDelay = 100;
const eraseDelay = 50;
const nextStringDelay = 1500;
let typewriterIndex = 0;
let typewriterStringIndex = 0;

const type = () => {
    if (typewriterStringIndex < typewriter[typewriterIndex].length) {
        if (!cursorBlink.classList.contains("typing")) {
            cursorBlink.classList.add("typing");
        }

        dynamicSpan.textContent += typewriter[typewriterIndex].charAt(
            typewriterStringIndex
        );
        typewriterStringIndex++;

        setTimeout(type, typingDelay);
    } else {
        cursorBlink.classList.remove("typing");
        setTimeout(erase, nextStringDelay);
    }
};

const erase = () => {
    if (typewriterStringIndex > 0) {
        if (!cursorBlink.classList.contains("typing")) {
            cursorBlink.classList.add("typing");
        }

        dynamicSpan.textContent = typewriter[typewriterIndex].substring(
            0,
            typewriterStringIndex - 1
        );
        typewriterStringIndex--;

        setTimeout(erase, eraseDelay);
    } else {
        cursorBlink.classList.remove("typing");
        typewriterIndex++;
        if (typewriterIndex >= typewriter.length) {
            typewriterIndex = 0;
        }
        setTimeout(type, nextStringDelay);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, nextStringDelay);
});
//End of Dynamic text Intro section

// Color Change Animation
const dynamicPhrase = document.querySelector("#dynamicPhrase>.dynamicPhrase");
const cursor = document.querySelector("#dynamicPhrase>.cursor");
const aboutMeCardBack = document.getElementById("back");
const skillContainer = document.getElementById("skillContainer");
const color = [
    "rgb(255, 113, 175)",
    "magenta",
    "rgb(38 255 0)",
    "yellow",
    "transparent",
];
const aboutMeColor = [
    "#fffdd0",
    "rgb(149, 229, 255)",
    "#ffe5b4",
    "rgb(255, 255, 85)",
    "transparent",
];
const colorDelay = 5000;
let colorIndex = 0;

const nextColor = () => {
    if (colorIndex < color.length - 1) {
        dynamicPhrase.style.color = color[colorIndex];
        cursor.style.backgroundColor = color[colorIndex];
        aboutMeCardBack.style.backgroundColor = aboutMeColor[colorIndex];
        colorIndex++;
        setTimeout(nextColor, colorDelay);
    } else {
        colorIndex = 0;
        nextColor();
    }
};


// Languages progress bar animation
const languageBars = document.querySelectorAll(".lbar");
const frameworkBars = document.querySelectorAll(".fbar");
const skills = document.getElementById("skills");
const skillsAndEducationContainer = document.getElementById(
    "skillsAndEducationContainer"
);

const skillLevelLanguages = [75, 20, 40, 80, 75];
let progressDelay1 = 100;


const seeProgress1 = () => {
    for (let language = 0; language < languageBars.length; language++) {
        for (let level = 0; level <= skillLevelLanguages[language]; level++) {
            setTimeout(() => {
                languageBars[language].innerText = level + "%";
                languageBars[language].style.width = `${level}%`;
            }, (progressDelay1 += 10));
        }
    }
    event.target.style.display = "none";
};