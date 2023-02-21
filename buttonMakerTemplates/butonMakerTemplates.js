// Script to rename the button "User Manual" to "Download Templates"
// on the equipment pages for the button makers

// if on button maker equipment pages
if(
    window.location.href.indexOf("equipment/item/148275") > -1 ||
    window.location.href.indexOf("equipment/item/148274") > -1 ||
    window.location.href.indexOf("equipment/item/148276") > -1
) {
    // Function to change the text of the button "User Manual" to "Download Templates"
    function changeButtonMakerText() {
        // Find a tag with href that ends in "/manual"
        let manualLink = document.querySelector("a[href$='/manual']");
        // Change the text to "Download Templates"
        manualLink.innerHTML = "Download Templates";
    };
    // On window load, run the function
    window.onload = changeButtonMakerText;
};