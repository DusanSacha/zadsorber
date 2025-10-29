sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/m/MessageToast",
    "sap/ndc/BarcodeScanner",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"    
], function(ControllerExtension, MessageToast, BarcodeScanner, Filter, FilterOperator) {
    'use strict';

		return ControllerExtension.extend("zadsorber.ext.controller.ListReportExt", {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        onScanButtonPressed: async function(oContext, aSelectedContexts) {
           //MessageToast.show("Custom handler invoked.");

            BarcodeScanner.scan(
            async function(result) {

                const oExtensionAPI = this.base.getExtensionAPI();
                //const oFiltersObj  = oExtensionAPI.getFilters();
                //const aFiltersRoot = oFiltersObj ?.filters || oFiltersObj ?.aFilters || [];

                oExtensionAPI.setFilterValues("Equipment", "EQ", result.text);
                oExtensionAPI.refresh();



            }.bind(this),
            function(err) {
                sap.m.MessageToast.show("Scan failed: " + err);
            }
            );   
        }
    });
});
