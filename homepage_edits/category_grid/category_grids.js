// JS script for category grids
// This is used to hide/show grid items


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
    // Get hide/show button
    let hideShowButton = catContainer.getElementsByClassName("titlebar-hideshowbutton")[0];
    // Change hide button symbol
    hideShowButton.innerHTML = hideShowButton.innerHTML === "▼" ? "▲" : "▼";
};
