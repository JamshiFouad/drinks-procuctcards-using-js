var product=[
    {
        photo:'https://m.media-amazon.com/images/I/61bJVpcul0L._AC_UL320_.jpg',
        name:'Maaza Mango Drink, PET Bottle, 1.5 L',
        price:'86',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/31ZeF174+RL._AC_UL320_.jpg',
        name:'Pepsi Mountain Dew Soft Drink Bottle, 750 ml',
        price:'40',
        details:''
    },
    {
        photo:'https://m.media-amazon.com/images/I/61tiR5teCjL._AC_UL320_.jpg',
        name:'Thums Up Soft Drink PET Bottle, 1.25 L',
        price:'68',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/71wGhC2m-nL._AC_UL320_.jpg',
        name:'Mirinda - Orange Flavour Soft Drink, 2.25L Bottle',
        price:'87',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/51xnS+TqVXL._AC_UL320_.jpg',
        name:' Sprite Lemon-Lime Flavoured Cold Drink | Recyclable PET Bottle, 1.25 L',
        price:'60',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/71YBmiSj-cL._AC_UL320_.jpg',
        name:'Coca-Cola Original Taste Soft Drink PET Bottle, 750 ml',
        price:'40',
        details:''
    },
    {
        photo:'https://m.media-amazon.com/images/I/71diSDvt5RL._AC_UL320_.jpg',
        name:'7 Up Soft Drink - 2.25L Bottle',
        price:'85',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/51-r9pOh08L._AC_UL320_.jpg',
        name:'Pepsi Soft Drink - 2.25L, Bottle',
        price:'87',
        details:'FREE delivery'
    },
    {
        photo:'https://m.media-amazon.com/images/I/51C8U7H-+6L._AC_UL320_.jpg',
        name:'FANTA®️ Orange Flavored Cold Drink |Bottle, 750 ml',
        price:'45',
        details:''
    },
    {
        photo:'https://m.media-amazon.com/images/I/51j+yrjkYCL._AC_UL320_.jpg',
        name:'Frooti Mango Soft Drink, 1.8 L Bottle',
        price:'90',
        details:'FREE delivery'
    }
]
var productCard;
for(var p of product){
    productCard = '<div id="products" style="width:25%;height:450px;;margin:10px;"><img src="' +p.photo+'"/><h4>'+p.name+'<br><h2 style="color:green;"><sup>&#8377;</sup>'+p.price+'</h2></h4><span style="color:red;margin:0">'+p.details+'</span></div>';
    document.getElementById('productCardContainer').innerHTML+=productCard;
}
