// Script to add a column resizer handle to the scheduler
// Author: Mason Gareis (mason.gareis@gmail.com)

// Function to add the column resizer handle to the scheduler
var addColumnResizer = function() {
    // Find the first table divider (class="fc-resource-timeline-divider table-active")
    divider = document.getElementsByClassName("fc-resource-timeline-divider table-active")[0];
    // If the divider exists, add the column resizer handle
    if(divider){
        // Dont add handle if it already exists
        if(divider.getElementsByClassName("column-resizer-handle").length > 0) {
            return;
        };
        // Create the column resizer handle element
        var resizer = document.createElement("div");
        resizer.className = "column-resizer-handle";
        resizer.innerHTML = "↔"; // double headed arrow
        // Add the column resizer handle to the table divider
        divider.appendChild(resizer);
    };
};

// On page load, add the column resizer handle to the scheduler
window.onload = addColumnResizer;

// Function to add resizer dynamically using observer
var addColumnResizerDynamic = function() {
    // Create an observer instance to watch for changes
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            // Get boolean for if the scheduler is loaded in the page
            var schedulerLoaded = mutation.target.classList.contains('fc-view-harness') && mutation.target.classList.contains('fc-view-harness-passive'); // Clicking "Availablity" button on equipment grid view
            schedulerLoaded = schedulerLoaded || mutation.target.id == "time_grid_cont"; // Loaded in on equipment or space page on windowload
            if (schedulerLoaded) {
                console.log("Column Resizer: Scheduler loaded")
                addColumnResizer();
            };
        });
    });
    // Observe the page for changes
    observer.observe(document, { childList: true, subtree: true });
};

// Because the scheduler might not be loaded when the page loads,
// a mutation observer is used to detect when the scheduler is loaded.

// Get the current URL
var url = window.location.href;
// Check if the URL is in list of URLs known to have the scheduler
if (
    /https:\/\/bookit\.dmc\.jhu\.edu\/reserve.?/.test(url) ||
    /https:\/\/bookit\.dmc\.jhu\.edu\/spaces.?/.test(url) ||
    /https:\/\/bookit\.dmc\.jhu\.edu\/space\/.?/.test(url)
) {
    addColumnResizerDynamic();
};

// Curently broken for mobile on equipment page,
// so only add for desktop if on equipment page
if (window.innerWidth > 768 && /https:\/\/bookit\.dmc\.jhu\.edu\/equipment\/item\/.?/.test(url)){
    addColumnResizerDynamic();
};
