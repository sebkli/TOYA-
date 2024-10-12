sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/UIComponent'],
  function (Controller, UIComponent) {
    'use strict';

    return Controller.extend('main.controller.Home', {
      onNavToTable: function () {
        const oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo('RouteTable');
      },
    });
  }
);
