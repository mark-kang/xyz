System.register(['./mock-products', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_products_1, core_1;
    var ItemService;
    return {
        setters:[
            function (mock_products_1_1) {
                mock_products_1 = mock_products_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemService = (function () {
                function ItemService() {
                }
                ItemService.prototype.getItems = function () {
                    return Promise.resolve(mock_products_1.ITEMS);
                };
                ItemService.prototype.getItemById = function (id) {
                    console.log(mock_products_1.ITEMS);
                    console.log(mock_products_1.ITEMS[1]);
                    return Promise.resolve(mock_products_1.ITEMS[0]);
                };
                ItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ItemService);
                return ItemService;
            }());
            exports_1("ItemService", ItemService);
        }
    }
});
//# sourceMappingURL=item.service.js.map