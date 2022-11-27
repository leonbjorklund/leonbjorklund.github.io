/** nextStep takes two HTML-elements and hides one of them, and shows another.
* @param {Element} currentScene - element that hides
* @param {Element} nextScene - elementet that shows */
function loadNextScene(currentScene, nextScene) {
  currentScene.style.display = "none";
  nextScene.style.display = "block";
}
  
// const mainPage = document.getElementById("main-canvas");
const mainPage = document.getElementById("main-page");


const projectPage = document.getElementById("project-page");
const resumePage = document.getElementById("resume-page");
const contactPage = document.getElementById("contact-page");

const projectsButton = document.getElementsByClassName("projects-button")[0];
const resumeButton = document.getElementsByClassName("resume-button")[0];
const contactButton = document.getElementsByClassName("contact-button")[0];


const homeButton = document.getElementsByClassName("nav-item")[0];

homeButton.addEventListener('click', event => {
  loadNextScene(projectPage, mainPage)
  resumePage.style.display = "none";
  contactPage.style.display = "none";
})

projectsButton.addEventListener('click', event => {
  loadNextScene(mainPage, projectPage)
})

resumeButton.addEventListener('click', event => {
  loadNextScene(mainPage, resumePage)
})

contactButton.addEventListener('click', event => {
  loadNextScene(mainPage, contactPage)
})