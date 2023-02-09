// Script to change the text "Login to LibApps" to "Staff Login"
// in the footer of the LibApps public pages

// Find admin footer
let adminFooter = document.getElementById("s-lc-public-footer-admin-links");
// Get Login to LibApps link
let loginLink = adminFooter.getElementsByTagName("a")
// Be extra sure we have the right link
if (loginLink[0].id == "s-lc-sign-in") {
    // Change the text
    loginLink[0].innerHTML = "DMC Staff Login";
}