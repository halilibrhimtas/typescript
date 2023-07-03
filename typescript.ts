//Javascript function
function sumJS(a,b){
    return a+b;
}

// Using type annotations - Typescript
function sumTS(a: number, b:number) : number{
    return a+b;
}

function types(name:string, isUser:boolean, createdDate:Date, names:string[], age:number){
    name = "Halil";
    isUser = false;
    names = ["Halil","İbrahim","Taş"];
    age = 23;
}

class FirstClass{

    title:string = "First App";
    name:string = "Halil";
    isUser:boolean = true;

    constructor () {
        console.log(this.title)
        console.log(`title : ${this.title}`)
        console.log(this.name)
        console.log(this.isUser)
    }

    Method1(){
        let name:string = "İbrahim"; // sadece bu method içerisinde tanımlı
        const surname:string = "Taş"; // bu değişken const keywordu sayesinde değiştirilemez 
    }
}

class Product{

    //Fields
    name:string;
    price:number;
    category: string;
    isPublish: boolean;
    piece:number;

    //Constructor
    constructor(name:string, price:number, category: string, isPublish: boolean, piece:number){
        this.name = name;
        this.price = price;
        this.category = category;
        this.isPublish = isPublish;
        this.piece = piece;
    }

    //Methods
    TotalPrice(price, piece) : number{
        return price*piece;
    }

}

class Product2 extends Product{

    constructor(name:string, price:number, category: string, isPublish: boolean, piece:number){
        super(name, price, category, isPublish, piece) // Product classının constructorına eriştik
    }

    TotalPrice(price: number, piece: number): number {
        return price*piece;
    }
    
    method2(){
        var p = new Product2("Kalem",10,"Kırtasiye",false, 200)
        console.log(p.TotalPrice.toString)
    }

    //Private
    //Public
    //Protected

}

interface Product3{
    name:string;
    price:number;

}

class Car implements Product3{
    name: string;
    price: number;

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }

}

