sap.ui.define(["sap/ui/core/mvc/XMLView", "sap/m/Text"], function (XMLView) {
  "use strict";

  XMLView.create({ viewName: "Quickstart.App" }).then(function (oView) {
    oView.placeAt("content");
  });
});
