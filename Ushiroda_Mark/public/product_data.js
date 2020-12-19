// Creaying the array of products and took this from SmartPhoneProducts3//
// all images from google//

var pastry = [
    {
        //Product 1
    "product": "Canele",
    "price": 4.00,
    "image": "./Images/Canele.png"
    },
    {
        //Product 2
    "product": "Croissant",
    "price": 5.00,
    "image": "./Images/Croissant.png"
    },
    {
        //Product 3
    "product" : "Macarons",
    "price": 3.00,
    "image": "./Images/Macarons.png"
    },
    {
        //Product 4
    "product": "Madeline",
    "price": 2.00,
    "image": "./Images/Madeline.png" 
    },
    {
        //Product 5
    "product": "Pain du Chocolat",
    "price": 7.00,
    "image": "./Images/PainDuChocolat.png" 
        }
]
var bread = [
    //product 1
    {
    "name": "Brioche",
    "price": 10.00,
    "image": "./Images/bread1.png"
    },
    //product 2
    {
    "name": "Baguette",
    "price": 8.00,
    "image": "./Images/bread2.png"
    },
    //product 3
    {
    "name": "Sourdough",
    "price": 15.99,
    "image": "./Images/bread3.png"
    },
    //product 4
    {
    "name": "Bagel",
    "price": 14.00,
    "image": "./Images/bread4.png"
    },
    //product 5
    {
    "name": "Focaccia",
    "price": 8.99,
    "image": "./Images/bread5.png"
    }
]
var cake = [
    //product 1
    {
    "name": "Ham and Cheese",
    "price": 5.99,
    "image": "./Images/cake1.png"
    },
    //product 2
    {
    "name": "Panini",
    "price": 9.99,
    "image": "./Images/cake2.png"
    },
    //product 3
    {
    "name": "Grilled Cheese",
    "price": 2.99,
    "image": "./Images/cake3.png"
    },
    //product 4
    {
    "name": "Veggie",
    "price": 20.00,
    "image": "./Images/cake4.png"
    },
    //product 5
    {
    "name": "Tuna",
    "price": 8.00,
    "image": "./Images/cake5.png"
    }
]
var cheese = [
    //product 1
    {
    "name": "Brie",
    "price": 81.99,
    "image": "./Images/cheese1.png"
    },
    //product 2
    {
    "name": "Swiss",
    "price": 52.00,
    "image": "./Images/cheese2.png"
    },
    //product 3
    {
    "name": "Cheddar",
    "price": 99.99,
    "image": "./Images/cheese3.png"
    },
    //product 4
    {
    "name": "Gouda",
    "price": 14.00,
    "image": "./Images/cheese4.png"
    },
    //product 5
    {
    "name": "Blue",
    "price": 47.50,
    "image": "./Images/cheese5.png"
    }
]
var sandwich = [
    //product 1
    {
    "name": "Fiadone",
    "price": 35.00,
    "image": "./Images/sandwich1.png"
    },
    //product 2
    {
    "name": "Quatre Quarts",
    "price": 24.95,
    "image": "./Images/sandwich2.png"
    },
    //product 3
    {
    "name": "Fraisier",
    "price": 19.95,
    "image": "./Images/sandwich3.png"
    },
    //product 4
    {
    "name": "Kougin Amann",
    "price": 49.95,
    "image": "./Images/sandwich4.png"
    },
    //product 5
    {
    "name": "Charlotte Russe",
    "price": 5.99,
    "image": "./Images/sandwich5.png"
    }
]
var products = {
    "pastry": pastry,
    "bread": bread,
    "cake": cake,
    "cheese": cheese, 
    "sandwich": sandwich
}

if(typeof module != 'undefined') { //if the type of the module is defined
    module.exports.products = products; //export the product_data
  }