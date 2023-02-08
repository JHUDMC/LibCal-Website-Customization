// Script to change the text "Login to LibApps" to "Staff Login"
// on the staff login page

// Find admin footer (div id="s-lc-public-footer-admin-links")
let adminFooter = document.getElementById("s-lc-public-footer-admin-links");
// Get Login to LibApps link (child a tag)
let loginLink = adminFooter.getElementsByTagName("a")
// Be extra sure we have the right link ( id="s-lc-sign-in")
if (loginLink[0].id == "s-lc-sign-in") {
    // Change the text
    loginLink[0].innerHTML = "DMC Staff Login";
}