var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " Kaydedildi!");
}
function save2(product2) {
    console.log(product2.name + " Kaydedildi!");
}
save({ id: 1, name: "Laptop", price: 1000 });
var mouse = new Product2();
mouse.name = "Mouse";
save2(mouse);
var CostumerService = /** @class */ (function () {
    function CostumerService() {
    }
    CostumerService.prototype.save = function () {
    };
    return CostumerService;
}());
