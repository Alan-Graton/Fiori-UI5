sap.ui.define(
  [
    // Components Imports
    "sap/m/Button",
    "sap/m/MessageToast",
  ],
  function (Button, MessageToast) {
    "use strict";

    new Button({
      // Attributes
      text: "Ready...",
      // Component Events
      press: function () {
        MessageToast.show("Hello World!");
      },
      // Where is suppose to be rendered
    }).placeAt("content");
  }
);
