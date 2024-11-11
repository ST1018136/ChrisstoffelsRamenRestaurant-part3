# ChrisstoffelsRamenRestaurant-part3

 Updates to user interface since part 2:
The Home Screen shows the images in two rows with 4 images each. The items display average prices broken down in different course meals.
removed search bar from the home screen. when the menu items are added they are added in an array from the menu.
A separate page on the application allows the guest to filter by course. The separate screen moves the adding of menu items from the home screen to a newly created screen.

The description page only displays the starters, mains, desserts, and appetisers along with their prices.
App Feature: displays the average prices of the menu items.

explanation pf the code used:
explanation:
State Management: We manage the name, price, and course inputs using the useState hook, and the menuItems array holds the list of menu items.

Input Fields: We use TextInput components for the name, price, and course fields. The price field is restricted to numeric input by setting keyboardType="numeric".

Add Item: When the "Add Item" button is pressed, the input is validated. If valid, the new menu item is added to the menuItems array.

Remove Item: The "Remove Item" button removes a menu item by its name. If an item with the entered name exists, it is removed from the menuItems list. If no item with the given name is found, an alert is shown.

Menu List: The menuItems array is displayed in a list format below the buttons. Each menu item is shown with its name, price, and course.

Styling: Basic styling is done using StyleSheet, which includes padding, text size, and alignment. The input fields have a border, and a list of menu items is displayed below the buttons.
ScrollView: The ScrollView is used to ensure that the content is scrollable, especially when the content becomes long (like in this case, a list of items).
Text: The Text component is used to display titles and menu items, styled using StyleSheet.create for better maintainability.
Styling: We've used StyleSheet.create to define the styles and applied margins, padding, font sizes, and weights to the different text elements for a clean layout.
Dynamic Content: The content of the description (e.g., menu items and prices) is static in this example, but it can be made dynamic by using props or state if needed.

