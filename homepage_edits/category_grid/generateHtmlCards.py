# Python Script to generate HTML cards for the category grid
import re

catTemplate = """
    <div class="category-container">
        <div class="category-titlebar" onclick="hideShowGridItems(event)">
            <span class="titlebar-hideshowbutton">
                &#x25B2; 
            </span>
            <span class="titlebar-title">
                {CAT_NAME}
            </span>
        </div>
        <div class="grid-container" style="display: none;">
{SUBCATS_HTML}
        
        </div>
    </div>
"""
subCatTempalte = """
            <a href="https://bookit.dmc.jhu.edu/reserve/{FRIENDLY_URL}">
                <div class="grid-item">
                    <div class="grid-item-title">
                        {SUBCAT_NAME}
                    </div>
                    <div class="grid-item-image">
                        <img class="grid-item-image" src="https://libapps.s3.amazonaws.com/customers/9396/images/{IMAGE_FILENAME}">
                    </div>
                </div>
            </a>"""

rawCatList = [
    "A/V Presentation: Extension Cables & Power Strips",
    "A/V Presentation: Projectors & Screens",
    "Audio: Cables & Adapters",
    "Audio: Headphones",
    "Audio: Mic Stands & Accessories",
    "Audio: Microphones",
    "Audio: MIDI Controllers",
    "Audio: Mixers",
    "Audio: PA Systems & Portable Speakers",
    "Audio: Recorders & USB Interfaces",
    "Audio: Video Production Accessories",
    "Computing: Cables & Adapters",
    "Computing: Drawing Tablets & Accessories",
    "Computing: File Storage & Media Readers",
    "Computing: Laptops & Peripherals",
    "Gaming: Consoles & Controllers",
    "Gaming: Nintendo Switch Games",
    "Gaming: PlayStation Games",
    "Gaming: VR Consoles & Controllers",
    "Gaming: Wii & Wii U Games",
    "Gaming: Xbox One Games",
    "Maker/DIY: Button Makers",
    "Maker/DIY: Microprocessors",
    "Maker/DIY: Sewing & Textiles",
    "Maker/DIY: Tools",
    "Other: Tote Bags & Poster Tubes",
    "Photo/Video: Cables & Adapters",
    "Photo/Video: DSLR Camera Kits",
    "Photo/Video: GoPros and Other Cameras",
    "Photo/Video: Lenses",
    "Photo/Video: Lighting & Grip",
    "Photo/Video: Tripods & Supports",
    "Photo/Video: Video Camera Kits",
    "Photo/Video: Video Accessories",
    "Software: Adobe & Minecraft"
]
rawFriendlyURLs = [
    "ACPowerCables",
    "Projectors",
    "AudioCables",
    "Headphones",
    "MicStands",
    "Microphones",
    "MIDIControllers",
    "Mixers",
    "Speakers",
    "AudioInterfaces",
    "VideoProdAudioAccessories",
    "ComputerCables",
    "DrawingTablets",
    "FileStorage",
    "Laptops",
    "GamingConsoles",
    "Nintendo",
    "PlayStation",
    "VR",
    "Wii",
    "Xbox",
    "ButtonMakers",
    "Microprocessors",
    "Sewing",
    "Tools",
    "Bags",
    "PhotoVideoCables",
    "DSLR",
    "OtherCameras",
    "Lenses",
    "Lights",
    "Tripods",
    "VideoCameras",
    "VideoAccessories",
    "Software"
]

# Get categories and sub categories
catList = []
subcatLists = []
friendlyURLsLists = []
for i in range(len(rawCatList)):
    line = rawCatList[i].split(": ")
    if len(catList) == 0 or catList[-1] != line[0]:
        catList.append(line[0])
        subcatLists.append([line[1]])
        friendlyURLsLists.append([rawFriendlyURLs[i]])
    else:
        subcatLists[-1].append(line[1])
        friendlyURLsLists[-1].append(rawFriendlyURLs[i])


# Auto Generate HTML
html = ""
for i in range(len(catList)):
    # Get cat
    cat = catList[i]
    print(cat)
    # Generate cat HTML
    catHtml = catTemplate.replace("{CAT_NAME}", cat)
    # Get subcats    
    subcats = subcatLists[i]
    friendlyURLs = friendlyURLsLists[i]
    # Start generating subcat HTML
    subcatsHtml = ""
    for j in range(len(subcats)):
        print("    " + subcats[j] + " (" + friendlyURLs[j] + ")")
        # Generate image filename
        imageFilename = "gridicon_" + friendlyURLs[j] + ".png"
        # Generate subcat HTML
        subcatHtml = subCatTempalte.replace("{SUBCAT_NAME}", subcats[j])
        subcatHtml = subcatHtml.replace("{FRIENDLY_URL}", friendlyURLs[j])
        subcatHtml = subcatHtml.replace("{IMAGE_FILENAME}", imageFilename)
        subcatsHtml += subcatHtml
    # Add subcat HTML to cat HTML
    catHtml = catHtml.replace("{SUBCATS_HTML}", subcatsHtml)
    # Add cat HTML to HTML
    html += catHtml
# Write HTML to file
with open("homepage_edits/category_grid/category_grid_AutoGeneratedCards.html", "w") as f:
    f.write(html)

# Print all neccessary filenames
print("")
for rawFriendlyURL in rawFriendlyURLs:
    print("gridicon_" + rawFriendlyURL + ".png")