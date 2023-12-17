const { productsPage } = require("../support/selectors");

describe("www.saucedemo.com UI: Verify that the items are sorted correctly.", () => {
  beforeEach("Login", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Verify that the items are correctly sorted by Name ( A -> Z ). ", () => {
    let names = []; // Empty array to store all item names.

    cy.get(productsPage.dropDownMenu) // Select the dropdown menu.
      .select(productsPage.AtoZOption); // Select the option "Name (A to Z)".

    // Iterate through each item name and add it to the array.
    cy.get(productsPage.productName).each((itemName) => {
      const nameText = itemName.text(); // Extract item name text from each element.
      names.push(nameText); // Add each item name text to the array.
    });

    // Proceed with sorting and asserting using the names array.
    cy.wrap(names).then((sortedItemNames) => {
      const originalItemNames = [...names]; // Create a copy of the original array.
      sortedItemNames.sort(); // Alphabetically sort the copy of the original array.

      // Assert that the original and sorted arrays are equal.
      expect(originalItemNames).to.deep.equal(sortedItemNames);
    });
  });

  it("Verify that the items are correctly sorted by Name ( Z -> A ). ", () => {
    let names = []; // Empty array to store all item names.

    cy.get(productsPage.dropDownMenu) // Select the dropdown menu.
      .select(productsPage.ZtoAOption); // Select the option "Name (Z to A)".

    // Iterate through each item name and add it to the array.
    cy.get(productsPage.productName).each((itemName) => {
      const nameText = itemName.text(); // Extract item name text from each element.
      names.push(nameText); // Add each item name text to the array.
    });

    // Proceed with sorting and asserting using the names array.
    cy.wrap(names).then((sortedItemNames) => {
      const originalItemNames = [...names]; // Create a copy of the original array.
      sortedItemNames.sort((a, b) => b.localeCompare(a)); // Sort the the copy of the original array in reverse alphabetical order.

      // Assert that the original and sorted arrays are equal.
      expect(originalItemNames).to.deep.equal(sortedItemNames);
      //expect(originalItemNames).to.not.deep.equal(sortedItemNames); //Uncomment to validate that the test fails "correctly".
    });
  });
});
