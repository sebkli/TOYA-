sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/Sorter',
  ],
  function (Controller, Filter, FilterOperator, Sorter) {
    'use strict';

    return Controller.extend('main.controller.Table', {
      _bSortAscending: false,
      onSearch: function (oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter('query');
        if (sQuery) {
          aFilter.push(new Filter('City', FilterOperator.Contains, sQuery));
        }
        const oList = this.byId('table');
        const oBinding = oList.getBinding('items');
        oBinding.filter(aFilter);
      },
      onSort: function () {
        const oTable = this.byId('table');
        const oBinding = oTable.getBinding('items');
        oBinding.sort(new Sorter('CompanyName', this._bSortAscending));
        this._bSortAscending = !this._bSortAscending;
      },
      onResetSort: function () {
        const oTable = this.byId('table');
        const oBinding = oTable.getBinding('items');
        oBinding.sort(null);
        this._bSortAscending = false;
      },
    });
  }
);
