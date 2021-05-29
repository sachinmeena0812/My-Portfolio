// Dynamic text Intro section
// const dynamicSpan = document.querySelector(".dynamicPhrase");
// const cursorBlink = document.querySelector(".cursor");
const textDisplay = document.getElementById('text-ani');
const words = ['Hello', 'My Name is Sachin Meena', 'This is my Portfolio', 'Let me walk you through'];
// const words = ['hi', 'hello', 'kaiseho'];

const typingDelay = 100;
const eraseDelay = 50;
const nextStringDelay = 1500;
let typewriterIndex = 0;
let typewriterStringIndex = 0;


let i = 0;
let j = 0;
let current = [];
let isDeleting = false;
let isEnd = false;
let colour = document.getElementById('intro-left-ani')

function loop() {

    textDisplay.innerHTML = current.join('');
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            current.push(words[i][j]);
            j++;

        }
        if (isDeleting && j <= words[i].length) {
            current.pop(words[i][j])
            j--;
            // colour.style.color = 'magneta';
        }
        if (j == words[i].length) {
            isEnd = true;
            isDeleting = true;

        }
        if (isDeleting && j == 0) {
            current = [];
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }
    }
    const speedUp = 50;
    const normal = 20;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normal;
    setTimeout(loop, 200)
}


loop()
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


// Hamburger Menu
// const hamBurgerMenu = document.getElementById("hamBurger");
// const navigation = document.getElementById("navigation");
// const navItems = Array.from(document.getElementsByClassName("navItems"));
// let menuOpen = false;

// hamBurgerMenu.addEventListener("click", () => {
//     if (!menuOpen) {
//         hamBurgerMenu.classList.add("open");
//         navItems.forEach((element) => {
//             element.style.height = "90vh";
//             element.style.clipPath = "circle(1000px at 93.3% 7.8%)";
//         });
//         menuOpen = true;
//     } else {
//         hamBurgerMenu.classList.remove("open");
//         navItems.forEach((element) => {
//             element.style.height = "0vh";
//             element.style.clipPath = "circle(0px at 93.3% 7.8%)";
//         });
//         menuOpen = false;
//     }
// });

// End Hamburger Menu


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