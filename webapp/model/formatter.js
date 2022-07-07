sap.ui.define([
    "sap/ui/core/library"], function (coreLibrary) {
	"use strict";

    // shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;

	return {

        /**
         * Rounds the number unit value to 2 digits
         * @public
         * @param {string} sValue the number string to be rounded
         * @returns {string} sValue with 2 digits rounded
         */
        numberUnit : function (sValue) {
            if (!sValue) {
                return "";
            }
            return parseFloat(sValue).toFixed(2);
        },
        formatStatus: function(t) {
            if (t === "OK") return "sap-icon://sys-enter-2";
            else return "sap-icon://error"
        },
        formatStatusColor: function(t) {
            if (t === "OK") return "#1e9e40";
            else return "#d11d1d"
        },

         /**
		 * Define cor do status de acordo com a mensagem
		 *
		 * @public
		 * @param {number} iValue - status da mensagem
		 * @returns {string} ValueState com o status da mensagem
         * 
         **/
        statusState: function(iValue) {
			if (iValue === "OK") {
				return ValueState.Success;
			} else {
				return ValueState.Error;
			};
		},
        status: function(Status) {
            if (Status === "OK") {
                return "sap-icon://accept";
            } else {
                return "sap-icon://decline";
            }
        }
    };

});