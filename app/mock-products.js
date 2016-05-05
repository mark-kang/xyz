System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CATEGORIES, ITEMS;
    return {
        setters:[],
        execute: function() {
            exports_1("CATEGORIES", CATEGORIES = [
                { "id": 1, "name": "BEDROOM" },
                { "id": 2, "name": "LIVING ROOM" }
            ]);
            exports_1("ITEMS", ITEMS = [
                {
                    "itemNo": "1",
                    "category": "BEDROOM",
                    "detail": "this is a good pillow?",
                    "size": "50 x 200 x 80",
                    "color": "yellow",
                    "maintenance": "\uBB3C\uC138\uD0C1 \uD558\uAD6C\uC2F6\uC740\uBA74 \uD574. \n \uCC45\uC784\uC740 \uBABB\uC9C4\uB2E4.",
                    "img1": "images/item/1-1.png",
                    "img2": "images/item/1-2.png",
                    "img3": "images/item/1-3.png",
                    "img4": "images/item/1-4.png",
                },
                {
                    "itemNo": "1234-xxx",
                    "category": "BEDROOM",
                    "detail": "this is a good pillow?",
                    "size": "50 x 200 x 80",
                    "color": "똥색",
                    "maintenance": "water washable",
                    "img1": "images/item/2-1.png",
                    "img2": "images/item/2-2.png",
                    "img3": "images/item/2-3.png",
                    "img4": "images/item/2-4.png",
                }
            ]);
        }
    }
});
//# sourceMappingURL=mock-products.js.map