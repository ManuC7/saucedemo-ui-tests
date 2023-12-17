export const loginPage = {
  inputUsername: '[data-test="username"]',
  inputPassword: '[data-test="password"]',
  buttonLogin: '[data-test="login-button"]',
  errorMessage: '[data-test="error"]',
  errorMessageTextBadUserOrPsw:
    "Epic sadface: Username and password do not match any user in this service",
  errorMessageTextNoUser: "Epic sadface: Username is required",
  errorMessageTextNoPass: "Epic sadface: Password is required",
};

export const productsPage = {
  dropDownMenu: '[data-test="product_sort_container"]',
  AtoZOption: "Name (A to Z)",
  ZtoAOption: "Name (Z to A)",
  productName: ".inventory_item_name",
};
