# LibCal-Website-Customization

This repository stores all the code for customizing the patron-facing LibCal interface for DMC BookIt!

## Customization List

### Check Membership Button

![Check membership button screenshot](images/readme_images/membership-button.png)
A button that links to the Power Apps membership status checker devloped by JHU IT. This is inserted on the homepage and opens the checker in a new tab.

### Authed Item Borders

![Authed Item Border screenshot](images/readme_images/authed-item-borders.png)
Draws a purple border around items requring authorization. Includes a banner with an info icon that simply redirects to the item page.

### Authed Item Disclaimer

![Authed Item Disclaimer screenshot](images/readme_images/authed-item-disclaimer.png)
Inserts a text disclaimer about what "authorization" means. Includes a button to check authorization status. The button has style dependencies with the homepage membership button.

### Category Grids

[Currently in devlopment!]

Adds a grid of the available categories and subcategories. Each category has a collapsible dropdown. Dynamically resizes to accomodate mobile UI.

## How to "Install" Customizations

### Adding Homepage HTML elements

This includes the *Check Membership Button* and *Category Grids*. To add custom HTML:

1. Go to the staff dashboard.
2. Clock the ribbon tab `Admin` > `Look & Feel`.
3. Click the tab `Homepage Editor`.
4. Click edit icon (pencil) on specific block.
5. In the Rich Text editor, click `Source` to reveal the HTML.
6. Paste in the HTML.

### Injecting Custom JS & CSS

\*All\* customizations have injected CSS. *Authed Item Borders*, *Authed Item Disclaimers*, and *Category Grids* all function using injected JavaScript.

To inject custom code:

1. Go to the staff dashboard.
2. Clock the ribbon tab `Admin` > `Look & Feel`.
3. Scroll down to `Code Customizations`.
4. Follow instructions below for JS or CSS.

For custom JS:

1. Wrap the script in `<script>` and `</script>` tags.
2. Paste the code in the custom code text box.
3. Click `save`.

For custom CSS:

1. Wrap the script in `<style>` and `</style>` tags.
2. Paste the code in the custom code text box.
3. Click `save`.

**Note**: Each script and style should be wrapped in separate `<script>` and `<stlye>` tags. This makes it easier to see the start and end of different customizations.
