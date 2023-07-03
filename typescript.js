var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Javascript function
function sumJS(a, b) {
    return a + b;
}
// Using type annotations - Typescript
function sumTS(a, b) {
    return a + b;
}
function types(name, isUser, createdDate, names, age) {
    name = "Halil";
    isUser = false;
    names = ["Halil", "İbrahim", "Taş"];
    age = 23;
}
var FirstClass = /** @class */ (function () {
    function FirstClass() {
        this.title = "First App";
        this.name = "Halil";
        this.isUser = true;
        console.log(this.title);
        console.log("title : ".concat(this.title));
        console.log(this.name);
        console.log(this.isUser);
    }
    FirstClass.prototype.Method1 = function () {
        var name = "İbrahim"; // sadece bu method içerisinde tanımlı
        var surname = "Taş"; // bu değişken const keywordu sayesinde değiştirilemez 
    };
    return FirstClass;
}());
var Product = /** @class */ (function () {
    //Constructor
    function Product(name, price, category, isPublish, piece) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.isPublish = isPublish;
        this.piece = piece;
    }
    //Methods
    Product.prototype.TotalPrice = function (price, piece) {
        return price * piece;
    };
    return Product;
}());
var Product2 = /** @class */ (function (_super) {
    __extends(Product2, _super);
    function Product2(name, price, category, isPublish, piece) {
        return _super.call(this, name, price, category, isPublish, piece) || this; // Product classının constructorına eriştik
    }
    Product2.prototype.TotalPrice = function (price, piece) {
        return price * piece;
    };
    Product2.prototype.method2 = function () {
        var p = new Product2("Kalem", 10, "Kırtasiye", false, 200);
        console.log(p.TotalPrice.toString);
    };
    return Product2;
}(Product));
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    return Car;
}());
