// JS script to hide/show equipment grid items on the homepage

// Function to hide or show grid items when the titlebar is clicked
var hideShowGridItems = function(event) {
    // Get event target class name
    let catContainer = event.target.parentElement;
    // Loop up to parent grid container
    while (catContainer.className !== "category-container") {
        catContainer = catContainer.parentElement;
    };
    // Get grid container
    let gridContainer = catContainer.getElementsByClassName("grid-container")[0];
    // Toggle grid container visibility
    gridContainer.style.display = gridContainer.style.display === "none" ? "grid" : "none";
    console.log(gridContainer.style.display)
    // Get hide/show button
    let hideShowButton = catContainer.getElementsByClassName("titlebar-hideshowbutton")[0];
    // Change hide button symbol
    hideShowButton.innerHTML = hideShowButton.innerHTML === "▼" ? "▲" : "▼";
};

// Function to hide or show equip when main button is clicked
var hideShowEquip = function(event) {
    // Get event target class name
    let catContainer = event.target.parentElement;
    // Loop up to id="two-main-butts-cont"
    while (catContainer.id !== "two-main-butts-cont") {
        catContainer = catContainer.parentElement;
    };
    // Get id from event target
    let id = event.target.id;
    // find id="equip-cats-cont"
    let equipCatsCont = document.getElementById("equip-cats-cont");
    // find id="inlab-cats-cont"
    let inlabCatsCont = document.getElementById("inlab-cats-cont");

    // Flip display
    if (id === "equip-butt") {
        equipCatsCont.style.display = equipCatsCont.style.display === "none" ? "block" : "none";
        inlabCatsCont.style.display = "none";
    } else if (id === "inlab-butt") {
        equipCatsCont.style.display = "none";
        inlabCatsCont.style.display = inlabCatsCont.style.display === "none" ? "block" : "none";
    };
};