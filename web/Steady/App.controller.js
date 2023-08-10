sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    // If this is not added the page is not rendered, since all the files are dependent of each other to work
    return Controller.extend("Quickstart.App", {
      onPress: function () {
        MessageToast.show("Hello App!");
      },
    });
  }
);
