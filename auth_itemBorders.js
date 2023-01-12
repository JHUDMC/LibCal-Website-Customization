/*
File: auth_itemBorders.js
Purpose: Adds a border to items requiring authorization
Author: Mason Gareis (mason.gareis@gmail.com)
Date Created: 01/11/2023
Notes: Known bug that doesn't add banner to every item on the page. (border is fine tho)
*/


// Check for authed items on equipment pages only
// (to preserve resources on other pages)
if(/^https:\/\/jhu-dmc\.libcal\.com\/equipment/.test(window.location.href)) {

    // ----------------------------------------- EDIT CODE HERE  -------------------------------------------- //
    // If an item requires athorization, add the equipment ID to the bottom of this list.
    // Note: This is ***NOT THE BARCODE***. It is the LibCal specific equipment ***ID***!!!!!!!!!!!!!
    // This can be found in LibCal by going to:   StuStaff Libcal View --> Settings (gear icon) -->
    //     "Spaces & Equipment" dropdown --> "Equipment & Categories" tab --> "ID" column 
    
    var masterAuthList = [
        "147953",  // Yamaha PA Speaker System
        "147967",  // Samson Portable PA Speaker System
        "148352",  // Canon EOS 1D Mark IV DSLR
        "136536"  // TEST!!!
    ]; // list of all equipment IDs requiring authorization.

    // --------------------------------------STOP EDITING CODE HERE ---------------------------------------- //
   
   
    // Create auth banner template element that can be inserted
    var authBanner = document.createElement("span");
    authBanner.classList.add("auth-banner");
    // Banner Text
    authBanner.innerHTML = "Auth Required "; // Intentional space at end
    // Craete info icon to be inserted into banner (img)
    var infoIcon = document.createElement("img");
    infoIcon.classList.add("auth-info-icon");
    // Icon image URL (from LibApps Image Manager Library)
    infoIcon.src = "https://libapps.s3.amazonaws.com/customers/9396/images/icon_info.png";
    // Insert info icon into banner
    authBanner.insertAdjacentElement("beforeend", infoIcon);
    
    // Observe item cards for changes
    const targetNode = document;
    // create an observer instance to watch for changes
    const observer = new MutationObserver(() => {
        // code to be executed when the page updates

        // Get all item cards (class="col-item")
        let itemCards = document.getElementsByClassName("col-item");
        // Find items requiring authorization
        let pageAuthItems = filterAuthedItems(itemCards);
        for(let i = 0; i < pageAuthItems.length; i++) {
            // Check for no exisiting auth border
            if(!pageAuthItems[i].classList.contains("auth-item-card")) {
                // Add border to card
                pageAuthItems[i].classList.add("auth-item-card");
                // Insert banner directly after the card's opening div tag
                let authBannerClone = authBanner.cloneNode(true);
                pageAuthItems[i].insertAdjacentElement("afterbegin", authBannerClone);
            };
        };

        // Function to filter for authed items
        function filterAuthedItems(itemCards) {
            let pageAuthList = [];
            for(let i = 0; i < itemCards.length; i++) {
                // Get EID from photo link
                let eid = itemCards[i].getElementsByClassName("btn-add")[0].getElementsByTagName("a")[0].getAttribute("data-eid");
                // If in master auth list
                if(masterAuthList.indexOf(eid) > -1) {
                    // Add item to authed items list
                    pageAuthList.push(itemCards[i]);
                };
            };
            return pageAuthList;
        };
    });

    // configuration of the observer
    const config = { childList: true, subtree: true };
    // observe changes!
    observer.observe(targetNode, config);

};