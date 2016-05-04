System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CATEGORIES, ITEMS;
    return {
        setters:[],
        execute: function() {
            exports_1("CATEGORIES", CATEGORIES = [
                { "id": 1, "name": "BEDROOM" }
            ]);
            exports_1("ITEMS", ITEMS = [
                { "id": 1, "category": "BEDROOM", "name": "A Pillow", "description": "this is a good pillow?" },
                { "id": 2, "category": "BEDROOM", "name": "B Pillow", "description": "this is a better pillow" }
            ]);
        }
    }
});
//# sourceMappingURL=mock-products.js.map