products = [
    {
        //Product 1
        "name": "Canele",
        "description": "vanilla rum pastry",
        "length": "Day Tour",
        "price": 4.00,
        "image": "./Images/Canele.png"
    },
    {
        //Product 2
        "name": "Croissant",
        "description": "crispy pastry",
        "length": "Day Tour",
        "price": 5.00,
        "image": "./Images/Croissant.png"
    },
    {
        //Product 3
        "name": "Macarons",
        "description": "Private tour of the Alhambra and General Life area",
        "length": "Day Tour",
        "price": 3.00,
        "image": "./Images/Macarons.png"
    },
    {
        //Product 4
        "name": "Madeline",
        "description": "delicate butter cakes",
        "price": 2.00,
        "image": "./Images/Madeline.png"
    },
    {
        //Product 5
        "name": "Pain Du Chocolat",
        "description": "choclate croissants",
        "price": 6.00,
        "image": "./Images/PainDuChocolat.png"
    }
]

if (typeof module != 'undefined') {
    module.exports.products = products;
  }