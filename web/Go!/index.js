sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use stricts";

  XMLView.create({ viewName: "Quickstart.App" }).then(function (oView) {
    oView.placeAt("content");
  });
});
