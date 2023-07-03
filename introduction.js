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
    return FirstClass;
}());
