# SauceDemo UI Test Suite

This repository contains a Cypress test suite for verifying the functionality of the `https://www.saucedemo.com` website. The tests focus on validating the correct sorting of items based on different criteria.

## Prerequisites

- Node.js and npm installed on your machine.

## Setup

1. **Clone this repository:**

   ```json
   git clone https://github.com/ManuC7/saucedemo-ui-tests.git
   ```

2. **Navigate to the project directory:**

   ```json
   cd saucedemo-ui-tests
   ```

3. **Install dependencies:**

   ```json
   npm install
   ```

## Configuration

1. **Create a `cypress.env.json` file in the project root with the following content:**

   ```json
   {
     "username": "username",
     "password": "password"
   }
   ```

   Replace `"username"` and `"password"` with valid credentials from www.saucedemo.com.

## Running Tests

To run the tests in headless mode and generate a Mochawesome report, use the following command:

```json
npm run test-headless
```

This command runs Cypress in headless mode, using Chrome as the browser, and generates a Mochawesome report.  
The test reports can be found in the reports folder.

To run the tests with the Cypress Test Runner and view the reports interactively, use:

```json
npm run test
```

This command runs Cypress in interactive mode, and opens the Cypress Test Runner.

## Test Descriptions

1. **Verify Items Sorting (A to Z)**
   - The test logs into the www.saucedemo.com website using provided credentials.
   - It selects the "Name (A to Z)" option from the dropdown menu.
   - It extracts the names of the displayed products and stores them in an array.
   - The test then sorts the array alphabetically and asserts that the original and sorted arrays are equal.
2. **Verify Items Sorting (Z to A)**

   - The test logs into the www.saucedemo.com website using provided credentials.
   - It selects the "Name (Z to A)" option from the dropdown menu.
   - It extracts the names of the displayed products and stores them in an array.
   - The test then sorts the array in reverse alphabetical order and asserts that the original and sorted arrays are not equal.

## Dependencies

- Cypress: ^13.6.1
- Cypress Mochawesome Reporter: ^3.7.0

## Test Location

The test script is located at cypress/e2e/saucedemoUI.cy.js.

## Reports

The test reports can be found in the reports folder.
