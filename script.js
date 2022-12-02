
/** @type {HTMLButtonElement} - hamburger-button that opens drop-down menu */
const hamburgerButton = document.getElementsByClassName("hamburger-button")[0];
/** @type {HTMLButtonElement} - cross-button that closes drop-down menu */
const crossButton = document.getElementsByClassName("cross-button")[0];
/** @type {HTMLElement} - element to contain other HTML-elements */
const hamburgerFull = document.getElementsByClassName("hamburger-full")[0];

/** menuOpen toggles a button and shows drop-down menu */
function menuOpen () {
hamburgerButton.addEventListener("click", () => {
  hamburgerFull.classList.toggle("active");
});
}
menuOpen();

/** menuClose toggles a button and hides drop-down menu */
function menuClose() {
crossButton.addEventListener("click", () => {
  hamburgerFull.classList.toggle("active");
});
}
menuClose();

/** @type {HTMLButtonElement} - button that submits form input*/
const submitButton = document.getElementById("submit-button");

/** sendEmail takes form-input and sends to my email using SMTP connection,
 *  also changes button text */
function sendEmail() {
  Email.send({
    Host: "smtp25.elasticemail.com",
    Username: "leon.bjorklund@gmail.com",
    Password: "form-pw123",
    To: "leon.bjorklund@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name",
  }).then((submitButton.innerHTML = "Sent!"));
}

/** @type {HTMLElement} - element to contain some info-text */
const websiteText = document.getElementById("website-text");

/** checkPage takes in an HTML-class and checks if body contains that class and returns
 * @param {Element} someClass - HTML-class that gets checked */
function checkPage(someClass) {
  if (document.body.classList.contains(someClass)) {
    return true;
  }
}

/** changeText takes in mW that's a set maxwidth, checks if a class exists, if class exists,
 * then a text is changed depending on mW-condition is met.
 * @param {window.matchMedia} mW - width-element condition */
function changeText(mW) {
  if (checkPage("projects-body") === true) {
    if (mW.matches) {
      websiteText.innerHTML = "My projects, resume & contact";
    } else {
      websiteText.innerHTML = "Displaying my projects, resume & contact";
    }
  }
}

let mW = window.matchMedia("(max-width: 500px)");

/** adds listener to width-window-change */
mW.addListener(changeText);

/** @type {createElement} - button is created */
const createEndElement = document.createElement("button");
/** giving class to button */
createEndElement.className = "end-button";
/** @type {createTextNode} - Creating and placing text to button */
const placeEndText = document.createTextNode("Back to Top");
/** @type {HTMLElement} - HTML-element to contain other elements */
const place = document.getElementById("end");

place.appendChild(createEndElement);
createEndElement.appendChild(placeEndText);

/** scrollEnd checks if user is at the end of the page then shows a button  */
function scrollEnd() {
  window.onscroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      place.style.display = "block";
    }
  };
}
scrollEnd();

/** @type {HTMLButtonElement} - button that on click goes to the top of the page */
const endButton = document.getElementsByClassName("end-button")[0];
endButton.addEventListener("click", goTop);

/** goTop takes user to the top of the page */
function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
