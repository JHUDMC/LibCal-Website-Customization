/*
File: auth_itemBorders.js
Purpose: Adds a border to items requiring authorization
Author: Mason Gareis (mason.gareis@gmail.com)
Date Created: 01/11/2023
*/
// ----------------------------------------- EDIT CODE HERE  -------------------------------------------- //
    // If an item requires athorization, add the equipment ID to the bottom of this list.
    // Note: This is ***NOT THE BARCODE***. It is the LibCal specific equipment ***ID***!!!!!!!!!!!!!
    // This can be found in LibCal by going to:   StuStaff Libcal View --> Settings (gear icon) -->
    //     "Spaces & Equipment" dropdown --> "Equipment & Categories" tab --> "ID" column 
    
    var masterAuthList = [
        "147953",  // Audio: PAs --- Yamaha PA Speaker System
        "147967",  // Audio: PAs --- Samson Portable PA Speaker System
        "148352",  // DSLR: Advanced --- Canon EOS 1D Mark IV DSLR
        "148355",  // DSLR: Advanced --- Canon EOS R6 Mirrorless Camera
        "148346",  // DSLR: Intro --- Canon EOS Rebel T5i DSLR
        "148383",  // Lights: Intro LED --- Intro RGB LED Light Kit
        "148451",  // Video: Vixia --- Canon Vixia HF R700
        "148450",  // Video: Vixia --- Canon Vixia HF R50
        "148447",  // Video: Vixia --- Canon Vixia HF M500
        "148448",  // Video: XA30 --- Canon XA30
        "148349",  // DSLR: Intermediate --- Canon EOS 90D DSLR
        "148452",  // Video: Sony FS5 Camera --- Sony FS5
        "148361",  // Camera Accessories: Lenses --- Rokinon EF 8mm f/3.5 Prime Fisheye Lens
        "148360",  // Camera Accessories: Lenses --- Canon EF-S 60mm f/2.8 Prime Macro Lens
        "148363",  // Camera Accessories: Lenses --- Tamron EF 70-300mm f/4-5.6 Zoom Lens
        "148362",  // Camera Accessories: Lenses --- Lensbabies 2.0 Ef Special FX Lens
        "148364",  // Camera Accessories: Lenses --- Rokinon Ef 35mm f/1.5 Prime Cine Lens
        "148365",  // Camera Accessories: Lenses --- Rokinon Ef 24mm f/1.5 Prime Cine Lens
        "148366",  // Camera Accessories: Lenses --- Rokinon Ef 50mm f/1.5 Prime Cine Lens
        "148367",  // Camera Accessories: Lenses --- Rokinon Ef 85mm f/1.5 Prime Cine Lens
        "148368",  // Camera Accessories: Lenses --- Sigma Ef 150-600mm f/5-6.3 DG OS HSM Lens
        "148410",  // Camera Accessories: Follow Focus --- Tilta Follow Focus System
        "148399",  // Camera Accessories: Tripods --- Small Gorillapod
        "148401",  // Camera Accessories: Tripods --- Mini GorillaPod
        "148407",  // Camera Accessories: Tripods --- Small Pistol-Grip Photo Tripod
        "148408",  // Camera Accessories: Tripods --- Heavy Duty Fluid Head Tripod
        "148398",  // Camera Accessories: Tripods --- Heavy Duty Fluid Head Tripod w/ Spreader
        "148403",  // Camera Accessories: Tripods --- Medium Photo Tripod
        "148393",  // Camera Accessories: Tripods --- Medium Pistol-Grip Photo Tripod
        "148395",  // Camera Accessories: Tripods --- Medium Tripod Dolly
        "148388",  // Camera Accessories: Tripods --- Medium Video/Photo Tripod
        "148404",  // Camera Accessories: Tripods --- Small Tripod Dolly
        "148420",  // Video: Atomos Monitor --- Atomos Shogun Inferno Recording Monitor
        "148354",  // DSLR: Advanced --- Canon EOS 5D Mark IV DSLR
        "148382",  // Lights: Advanced LED --- Aputure Light Storm (C120d II) LED Light Kit
        "148405",  // Camera Accessories: Ronin --- Ronin RS2 Gimbal/Steadicam
        "146930",  // Audio: Mixers --- Presonus AR12c Portable Mixer
        "146927",  // Audio: Mixers --- Mackie Portable Mixer 
        "136536"   // Test   
    ]; // list of all equipment IDs requiring authorization.

    // --------------------------------------STOP EDITING CODE HERE ---------------------------------------- //
   

// Check for authed items on equipment pages only
// (to preserve resources on other pages)
if(/^https:\/\/bookit\.dmc\.jhu\.edu\/equipment\?/.test(window.location.href) ||  /^https:\/\/bookit\.dmc\.jhu\.edu\/reserve/.test(window.location.href)) {
    // Create auth banner template element that can be inserted
    
    var authBanner = document.createElement("span");
    authBanner.classList.add("auth-banner");
    // Add Clicklable Banner Text
    var authBannerText = document.createElement("a");
    authBannerText.classList.add("auth-banner-text");
    authBannerText.href = "";
    authBannerText.innerHTML = "Auth Required ";  // Intentional space at end
    authBanner.appendChild(authBannerText);
    // Create info icon to be inserted into banner (img)
    var infoIcon = document.createElement("img");
    infoIcon.classList.add("auth-info-icon");
    // Icon image URL (from LibApps Image Manager Library)
    infoIcon.src = "https://libapps.s3.amazonaws.com/customers/9396/images/icon_info.png";
    // Wrap icon in anchor tag to make it clickable
    var infoIconLink = document.createElement("a");
    infoIconLink.href = "";
    infoIconLink.id = "auth-info-icon-link";
    infoIconLink.appendChild(infoIcon);
    // Insert info icon into banner
    authBanner.insertAdjacentElement("beforeend", infoIconLink);
        

    
    // Observe page changes to update cards dynamically
    const observer = new MutationObserver(() => {
        // Code to be executed when the page updates

        // Get all item cards (class="col-item")
        let itemCards = document.getElementsByClassName("col-item");
        // Find items requiring authorization
        let pageAuthItems = filterAuthedItems(itemCards);
        for(let i = 0; i < pageAuthItems.length; i++) {
            // Check for no exisiting auth border
            if(!pageAuthItems[i].classList.contains("auth-item-card")) {
                // Add border to card
                pageAuthItems[i].classList.add("auth-item-card");
                // Clone banner template
                let authBannerClone = authBanner.cloneNode(true);
                // Get item page link
                let itemPageHref = pageAuthItems[i].getElementsByTagName("a")[0].href;
                // Get banner link and info icon a tags
                let itemPageLinks = authBannerClone.getElementsByTagName("a")
                // Change item page links
                for(let j = 0; j < itemPageLinks.length; j++) {
                    itemPageLinks[j].href = itemPageHref;
                };
                // Insert banner directly after the card's opening div tag
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
    
    // observe changes!
    observer.observe(document, { childList: true, subtree: true };);

};