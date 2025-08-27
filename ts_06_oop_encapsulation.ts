//encapsulation
class Item {

    private itemName !: string;
    private itemPrice !: number;

    // constructor
    constructor(name: string, price: number) {
        this.setItemName(name);
        this.setItemPrice(price);
    }

    // getter for itemName
    public getItemName(): string {
        return this.itemName;
    }
    // setter for itemName
    public setItemName(name: string) {
        this.itemName = name;
    }

    // getter for itemPrice
    public getItemPrice(): number {
        return this.itemPrice;
    }
    // setter for itemPrice
    public setItemPrice(price: number) {
        if (price <= 0) {
            throw new Error("Price must be greater than zero.");
        }
        this.itemPrice = price;
    }
}
//let item1 = new Item("Laptop", -100);  //will throw an error
let item1 = new Item("Laptop", 1000);
console.log(item1);

// console.log(item1.itemName);   // does not compile as itemName is private
console.log(item1.getItemName());
console.log(item1.getItemPrice());