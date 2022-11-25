/** nextStep takes two HTML-elements and hides one of them, and shows another.
 * @param {Element} currentScene - element that hides
 * @param {Element} nextScene - elementet that shows */
 function loadNextScene(currentScene, nextScene) {
    currentScene.style.display = "none";
    nextScene.style.display = "block";
  }
  
const mainPage = document.getElementById("main-canvas");
const icons = document.getElementById("icons");

const projectIcon = document.getElementById("projects");
const projectPage = document.getElementById("project-page");

projectIcon.addEventListener("click", function() {
    mainPage.style.display = "none";
    icons.style.display = "none";
    projectPage.style.display = "block";
})

