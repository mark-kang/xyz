System.register(['angular2/core', './item', './item.service'], function(exports_1, context_1) {
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
    var core_1, item_1, item_service_1;
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_1_1) {
                item_1 = item_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ItemComponent = (function () {
                function ItemComponent(_itemService) {
                    this._itemService = _itemService;
                    this.selectedItem = new item_1.Item;
                    this.selectedImgNum = 1;
                    this.bigImgPath = "1-1-b.png";
                }
                ItemComponent.prototype.getItem = function (id) {
                    var _this = this;
                    this._itemService.getItemById(id).then(function (item) { return _this.selectedItem = item; });
                };
                ItemComponent.prototype.ngOnInit = function () {
                    this.getItem(1);
                };
                ItemComponent.prototype.setBigImg = function (imgNum) {
                    this.selectedImgNum = imgNum;
                    this.bigImgPath = this.selectedItem.itemNo + "-" + imgNum + "-b.png";
                    console.log("bigImgPath = " + this.bigImgPath);
                };
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'my-item',
                        templateUrl: 'html/item.html',
                        providers: [item_service_1.ItemService]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], ItemComponent);
                return ItemComponent;
            }());
            exports_1("ItemComponent", ItemComponent);
        }
    }
});
//# sourceMappingURL=item.component.js.map