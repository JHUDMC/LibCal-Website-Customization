// Script to hide/show the FAQ and Contact Us sections
//   and the FAQ answers

// TODO: wrap in a function to run only on the homepage

// Function to hide/show the FAQ section
var hideShow_FAQ = function() {
    // Get id="FAQ_and_ContactUs"
    let FAQ_and_ContactUs = document.getElementById("FAQ_and_ContactUs");
    // Get Contact Us section (id="ContactUs-content")
    let ContactUs = FAQ_and_ContactUs.querySelector("#ContactUs-content");
    // Hide Contact Us section
    ContactUs.style.display = "none";
    // Get FAQ section (id="FAQ-content")
    let FAQ = FAQ_and_ContactUs.querySelector("#FAQ-content");
    // Get hideShow buttons
    let FAQ_hideShowButton = document.getElementById("FAQ_hideShow");
    let ContactUs_hideShowButton = document.getElementById("ContactUs_hideShow");
    
    // if FAQ arrow up
    if (FAQ_hideShowButton.innerHTML === "▲") {
        // Change FAQ arrow to down
        FAQ_hideShowButton.innerHTML = "▼";
        // Show FAQ section
        FAQ.style.display = "block";
        // if ContactUs arrow down, change to up
        if (ContactUs_hideShowButton.innerHTML === "▼") {
            ContactUs_hideShowButton.innerHTML = "▲";
        };
        // Hide Contact Us section
        ContactUs.style.display = "none";
    } else {
        // Change FAQ arrow to up
        FAQ_hideShowButton.innerHTML = "▲";
        // Hide FAQ section
        FAQ.style.display = "none";
    };
};

// Function to hide/show the Contact Us section
var hideShow_ContactUs = function(event) {
    // Get id="FAQ_and_ContactUs"
    let FAQ_and_ContactUs = document.getElementById("FAQ_and_ContactUs");
    // Get FAQ section (id="FAQ-content")
    let FAQ = FAQ_and_ContactUs.querySelector("#FAQ-content");
    // Hide FAQ section
    FAQ.style.display = "none";
    // Get Contact Us section (id="ContactUs-content")
    let ContactUs = FAQ_and_ContactUs.querySelector("#ContactUs-content");
    // Show Contact Us section
    ContactUs.style.display = "block";
    // Get hideShow buttons
    let FAQ_hideShowButton = document.getElementById("FAQ_hideShow");
    let ContactUs_hideShowButton = document.getElementById("ContactUs_hideShow");
    // if ContactUs arrow up
    if (ContactUs_hideShowButton.innerHTML === "▲") {
        // Change ContactUs arrow to down
        ContactUs_hideShowButton.innerHTML = "▼";
        // Show Contact Us section
        ContactUs.style.display = "block";
        // if FAQ arrow down, change to up
        if (FAQ_hideShowButton.innerHTML === "▼") {
            FAQ_hideShowButton.innerHTML = "▲";
        };
        // Hide FAQ section
        FAQ.style.display = "none";
    } else {
        // Change ContactUs arrow to up
        ContactUs_hideShowButton.innerHTML = "▲";
        // Hide Contact Us section
        ContactUs.style.display = "none";
    };
};

// Function to hide/show the FAQ answers
var hideShow_FAQ_answer = function(event) {
    // Get FAQ answer
    let FAQ_answer = event.currentTarget.parentNode.querySelector(".FAQ_answer");
    // Get FAQ arrow (child with class="FAQ_Question_hideShow")
    let FAQ_arrow = event.currentTarget.parentNode.querySelector(".FAQ_Question_hideShow");
    // if FAQ arrow up
    if (FAQ_arrow.innerHTML === "▲") {
        // Change FAQ arrow to down
        FAQ_arrow.innerHTML = "▼";
        // Show FAQ answer
        FAQ_answer.style.display = "block";
    } else {
        // Change FAQ arrow to up
        FAQ_arrow.innerHTML = "▲";
        // Hide FAQ answer
        FAQ_answer.style.display = "none";
    };
}