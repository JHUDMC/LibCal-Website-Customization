/*
File: auth_itemPageDisclaimer.js
Purpose: Adds a disclaimer to item pages requiring authorization
Author: Mason Gareis (mason.gareis@gmail.com)
Date Created: 01/17/2023
*/

// Check for authed items on equipment pages only
// (wrapped like this to preserve resources on other pages)
if(/^https:\/\/bookit\.dmc\.jhu\.edu\/equipment\/item\//.test(window.location.href)) {
    // get the equipment ID from the end of the URL
    var equipmentID = window.location.href.split("/").pop();
    // check if the equipment ID is in the masterAuthList
    if(masterAuthList.includes(equipmentID)) {
        // Create disclaimer
        var authDisclaimer = document.createElement("div");
        authDisclaimer.classList.add("auth-disclaimer");
        // Disclaimer text
        var disclaimerText = "<br>This item requires a one-time authorization before you are able to make a reservation. ";
        disclaimerText += "To get authorized, come to the DMC anytime we're open and ask to get trained at the front desk. ";
        disclaimerText += "If you are unsure of your authorization status, click the button to view a list of your trainings alongside your membership.<br><br><br>";
        authDisclaimer.innerHTML = disclaimerText;
        // Disclaimer button to check authorization status
        var authButton = document.createElement("button");
        authButton.classList.add("auth-disclaimer-button");
        authButton.innerHTML = "Check Authorization Status";
        authButton.onclick = function() {
            window.open('https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fapps.powerapps.com%2Fplay%2Fe%2Fdefault-9fa4f438-b1e6-473b-803f-86f8aedf0dec%2Fa%2Fad75b353-5330-49e1-be98-512846fd1a10%3FtenantId%3D9fa4f438-b1e6-473b-803f-86f8aedf0dec&amp;data=05%7C01%7Ccharney%40jhu.edu%7C0769ae5f8d974f10947608dae3650974%7C9fa4f438b1e6473b803f86f8aedf0dec%7C0%7C0%7C638072320339431736%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&amp;sdata=LCEVjmUt21nBw00wXibuz1yDUiMFa4CHbp41uO%2BB9J0%3D&amp;reserved=0');
        };
        authDisclaimer.insertAdjacentElement("afterbegin", authButton);
        
        // Observe page changes to update page dynamically
        const targetNode = document;
        // create an observer instance to watch for changes
        const observer = new MutationObserver(() => {
            // Code to be executed when the page updates:
            // Check for existing auth disclaimer
            if(document.getElementsByClassName("auth-disclaimer").length <= 0) {
                // Insert disclaimer at the beginning of "col-sm-9"
                var col9 = document.getElementsByClassName("col-sm-9")[0];
                col9.insertAdjacentElement("afterbegin", authDisclaimer);
            };
        });
        // configuration of the observer
        const config = { childList: true, subtree: true };
        // observe changes!
        observer.observe(targetNode, config);
    };
};