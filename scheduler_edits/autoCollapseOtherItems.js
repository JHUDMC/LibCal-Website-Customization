// Script to automatically collapse the "Other items in this category" section
// on equipment item pages when the page loads.

// If on an equipment item page (URL="https://bookit.dmc.jhu.edu/equipment/item/...")
if (/https:\/\/bookit\.dmc\.jhu\.edu\/equipment\/item\/.?/.test(window.location.href)) {
    console.log("Auto Collapse Other Items: On equipment item page")
    // On page load, call collapseOtherItems() function
    window.onload = collapseOtherItems;
    
    // Function to collapse the "Other items in this category" section
    function collapseOtherItems() {
        // Get span with class="fc-datagrid-cell-main"
        var possibleSpans = document.getElementsByClassName("fc-datagrid-cell-main");
        // Keep span with innerHTML="Other items in this category"
        for (var i = 0; i < possibleSpans.length; i++) {
            if (possibleSpans[i].innerHTML == "Other items in this category") {
                var span = possibleSpans[i];
                break;
            };
        };
        // Get the collapse button (first child of span's parent)
        var button = span.parentNode.firstChild;
        // Click the button
        button.click();
    };
    // Function to add resizer dynamically using observer
    var collapseOtherItemsDynamic = function() {
        // Create an observer instance to watch for changes
        const collapseOtherItemsObserver = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                var schedulerLoaded = mutation.target.id == "cart-nav"; // Scheduler fully loaded
                if (schedulerLoaded) {
                    collapseOtherItems();
                    // Stop observing
                    collapseOtherItemsObserver.disconnect();
                };
            });
        });
        // Observe the page for changes
        collapseOtherItemsObserver.observe(document, { childList: true, subtree: true });
    };

    // Wait for scheduler to load before calling collapseOtherItems()
    collapseOtherItemsDynamic();
};

