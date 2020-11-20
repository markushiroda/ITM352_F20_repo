// Creaying the array of products and took this from SmartPhoneProducts3//
// all images from google//

products = [
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
];


if(typeof module != 'undefined') { //if the type of the module is defined
    module.exports.products = products; //export the product_data
  }