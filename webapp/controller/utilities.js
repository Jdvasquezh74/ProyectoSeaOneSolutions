sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage2: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"nombre": "",
				"descripcion": "",
				"avance": 0,
				"fecha": new Date(Date.UTC(2024, 4, 24)),
				"completada": false,
				"___FK_894cc9d3bea7cff61b05b009_00013": ""
			};
		}
	};
});
