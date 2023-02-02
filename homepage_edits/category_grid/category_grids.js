// JS script for category grids
// This is used to hide/show grid items & resize grid items to be square


// Once html is fully loaded
window.onload = function() {
    // Resize grid items to be square aspect ratio or longer
    resizeGridItems();
};
// Resize grid items to be square on window resize
window.onresize = function() {
    resizeGridItems();
};

// Function to resize grid items to be square
var resizeGridItems = function() {
    // Get all grid items
    var gridItems = document.getElementsByClassName("grid-item");
    // Loop through grid items
    for (let i = 0; i < gridItems.length; i++) {
        // Get grid item
        let gridItem = gridItems[i];
        // Reset height to auto
        gridItem.style.height = "auto";
        // Get height and width
        let gridItemHeight = gridItem.clientHeight;
        let gridItemWidth = gridItem.clientWidth;
        // Resize if not at least 1:1 (i.e. block is too short)
        if (gridItemHeight < gridItemWidth) {
            gridItem.style.height = gridItemWidth + "px";
        };
    };
};

// Function to hide or show grid items
var hideShowGridItems = function(event) {
    // get grid container of the current category
    let gridContainer = event.target.parentNode.nextElementSibling;
    // toggle grid container visibility
    gridContainer.style.display = gridContainer.style.display === "none" ? "grid" : "none";
    // change hide button symbol
    event.target.innerHTML = event.target.innerHTML === "▼" ? "▲" : "▼";
};