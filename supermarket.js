const supermarketItems = [
    // Fruit category
    {
        name: "Apple",
        category: "Fruit",
        quantity: 10,
        price: 0.5
    },
    {
        name: "Banana",
        category: "Fruit",
        quantity: 15,
        price: 0.3
    },
    {
        name: "Orange",
        category: "Fruit",
        quantity: 12,
        price: 0.6
    },
    // Dairy category
    {
        name: "Milk",
        category: "Dairy",
        quantity: 5,
        price: 1.2
    },
    {
        name: "Cheddar Cheese",
        category: "Dairy",
        quantity: 4,
        price: 3.8
    },
    {
        name: "Yogurt",
        category: "Dairy",
        quantity: 8,
        price: 0.9
    },
    // Bakery category
    {
        name: "Bread",
        category: "Bakery",
        quantity: 3,
        price: 2.5
    },
    {
        name: "Croissant",
        category: "Bakery",
        quantity: 7,
        price: 1.5
    },
    {
        name: "Bagel",
        category: "Bakery",
        quantity: 6,
        price: 1.0
    },
    // Vegetable category
    {
        name: "Broccoli",
        category: "Vegetable",
        quantity: 7,
        price: 1.3
    },
    {
        name: "Carrot",
        category: "Vegetable",
        quantity: 9,
        price: 0.8
    },
    {
        name: "Spinach",
        category: "Vegetable",
        quantity: 5,
        price: 1.5
    }
];

const cart = [
    {
        name: "Apple",
        quantity: 2
    },
    {
        name: "Spinach",
        quantity: 3
    },
    {
        name: "Croissant",
        quantity: 4
    }
]

// Get unique categories from supermarket items
let categories = []
let uniq_categories = []

// for loop through items in the supermarket array
for (item in supermarketItems){
    // item is the object
    const curCategory = item['category'];

    // check whether the categories array contains the current category
    if(! categories.includes(curCategory)){
        categories.push(curCategory);
    }
}
console.log(categories);

function getPrice(itemName){
    // loop through supermarket items to find price
    // return the price

    for(let item of supermarketItems){
        if(item["name"] === itemName){
            return item["price"];
            console.log("Found " + item["name"] + "with price "  + item["price"]);   
        }
    }

    return 0;

}

let grandTotal = 0;

// Get total price of items in cart
for (let cartItem of cart){
    const itemPrice = getPrice(cartItem);
    const totPrice = itemPrice * cartItem["quantity"];
    grandTotal += totPrice;
}
console.log(grandTotal);
